import { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import './SubscriptionPage.scss';

type MealType = 'breakfast' | 'lunch' | 'dinner';

const BASE_PRICE_PER_MEAL = 4999; // per meal per month
const DELIVERY_CHARGE = 1499;
const EXTRA_PROTEIN_STEP_GRAMS = 10;
const EXTRA_PROTEIN_STEP_PRICE = 749; // per +10g

const SubscriptionPage = () => {
  const [numberOfPersons, setnumberOfPersons] = useState<{
    [K in MealType]: number;
  }>({ breakfast: 0, lunch: 1, dinner: 0 });
  const [extraProtein, setExtraProtein] = useState<{ [K in MealType]: number }>(
    { breakfast: 0, lunch: 0, dinner: 0 }
  );
  const [isTakeaway, setIsTakeaway] = useState(false);

  const baseProteinInfo = {
    breakfast: { veg: 30, nonVeg: 45 },
    lunch: { veg: 30, nonVeg: 45 },
    dinner: { veg: 30, nonVeg: 45 },
  } as const;

  const basePrice = useMemo(() => {
    const totalnumberOfPersons =
      numberOfPersons.breakfast +
      numberOfPersons.lunch +
      numberOfPersons.dinner;
    return BASE_PRICE_PER_MEAL * totalnumberOfPersons;
  }, [numberOfPersons]);

  const customizationCost = useMemo(() => {
    const totalExtraSteps =
      extraProtein.breakfast + extraProtein.lunch + extraProtein.dinner;
    return totalExtraSteps * EXTRA_PROTEIN_STEP_PRICE;
  }, [extraProtein]);

  const deliveryCost = useMemo(() => {
    if (isTakeaway) return 0;
    const activeTypes = ['breakfast', 'lunch', 'dinner'].filter(
      meal => numberOfPersons[meal as MealType] > 0
    ).length;
    if (activeTypes === 0) return 0;
    return DELIVERY_CHARGE + Math.max(0, activeTypes - 1) * 1000;
  }, [isTakeaway, numberOfPersons]);

  const finalPrice = useMemo(
    () => basePrice + customizationCost + deliveryCost,
    [basePrice, customizationCost, deliveryCost]
  );

  return (
    <section className="subscription-page">
      <Helmet>
        <title>ZFIT Subscription | Meal Plans</title>
        <meta
          name="description"
          content="Subscribe to ZFIT meals. Choose breakfast, lunch, dinner. Add extra protein. Transparent pricing with delivery or takeaway."
        />
        <link rel="canonical" href="https://zfit.in/subscription" />
        <meta property="og:title" content="ZFIT Subscription Plans" />
        <meta
          property="og:description"
          content="Flexible meal subscriptions with add-on protein options."
        />
      </Helmet>
      <div className="container">
        <div className="menu-header">
          <h2 className="section-title">Subscription</h2>
          <p className="section-subtitle">
            Choose your plan and tailor your protein.
          </p>
        </div>

        <div className="subscription-grid">
          {(['breakfast', 'lunch', 'dinner'] as MealType[]).map(meal => (
            <div key={meal} className="card subscription-card">
              <h3 className="subscription-title">
                {meal[0].toUpperCase() + meal.slice(1)}
              </h3>

              <div className="field">
                <label>Number of Persons</label>
                <select
                  value={numberOfPersons[meal]}
                  onChange={e =>
                    setnumberOfPersons(prev => ({
                      ...prev,
                      [meal]: Number(e.target.value),
                    }))
                  }
                >
                  {[0, 1, 2, 3].map(n => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label>Base price</label>
                <div className="value">₹ {BASE_PRICE_PER_MEAL}/meal/month</div>
              </div>

              <div className="field">
                <label>Base protein</label>
                <div className="value">
                  Non-veg: {baseProteinInfo[meal].nonVeg}g+, Veg:{' '}
                  {baseProteinInfo[meal].veg}g+
                </div>
              </div>

              <div className="field">
                <label>Add more protein</label>
                <div className="protein-steps">
                  <button
                    className="btn btn-secondary"
                    onClick={() =>
                      setExtraProtein(prev => ({
                        ...prev,
                        [meal]: Math.max(0, prev[meal] - 1),
                      }))
                    }
                  >
                    -10g
                  </button>
                  <div className="value">
                    +{extraProtein[meal] * EXTRA_PROTEIN_STEP_GRAMS}g
                  </div>
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      setExtraProtein(prev => ({
                        ...prev,
                        [meal]: prev[meal] + 1,
                      }))
                    }
                  >
                    +10g
                  </button>
                </div>
                <div className="note">
                  ₹ {EXTRA_PROTEIN_STEP_PRICE} per +10g protein
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="summary card">
          <div className="summary-row">
            <span>Base price</span>
            <span>₹ {basePrice.toLocaleString('en-IN')}</span>
          </div>
          <div className="summary-row">
            <span>Customizations</span>
            <span>₹ {customizationCost.toLocaleString('en-IN')}</span>
          </div>
          <div className="summary-row">
            <span>Delivery charge</span>
            <span>₹ {deliveryCost.toLocaleString('en-IN')}</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>₹ {finalPrice.toLocaleString('en-IN')}</span>
          </div>

          <div className="options">
            <label className="checkbox">
              <input
                type="checkbox"
                checked={isTakeaway}
                onChange={e => setIsTakeaway(e.target.checked)}
              />
              Takeaway (₹0 delivery)
            </label>
          </div>

          <a href="tel:+919693438548" className="btn btn-primary subscribe-btn">
            Subscribe (Call +91 96934 38548)
          </a>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPage;
