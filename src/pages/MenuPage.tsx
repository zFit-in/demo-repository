import { useMemo, useState } from 'react';
import { Search, Zap, Heart, Utensils, Filter } from 'lucide-react';
import MenuItemCard from '../components/MenuItemCard';
import { menuData } from '../data/menu';
import { Helmet } from 'react-helmet-async';
import './MenuPage.scss';

const MenuPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [vegOnly, setVegOnly] = useState(false);
  const [proteinRange, setProteinRange] = useState<[number, number]>([0, 200]);

  const categories = [
    { id: 'all', name: 'All Items', icon: <Search /> },
    { id: 'high-protein', name: 'High Protein', icon: <Zap /> },
    { id: 'anti-aging', name: 'Anti Aging', icon: <Heart /> },
    { id: 'bowls', name: 'Bowls', icon: <Utensils /> },
  ];

  const allItems = useMemo(
    () => menuData.categories.flatMap(category => category.items),
    []
  );

  const filteredItems = useMemo(() => {
    return allItems.filter(item => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.description &&
          item.description.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesVeg = !vegOnly || Boolean(item.isVegetarian);
      const matchesProtein =
        item.protein >= proteinRange[0] && item.protein <= proteinRange[1];

      return matchesSearch && matchesCategory && matchesVeg && matchesProtein;
    });
  }, [allItems, searchTerm, selectedCategory, vegOnly, proteinRange]);

  return (
    <section className="menu-page">
      <Helmet>
        <title>ZFIT Menu | High-Protein, Anti-Aging Meals</title>
        <meta
          name="description"
          content="Explore ZFIT's high-protein and anti-aging meals. Filter by category, veg, and protein to find your perfect dish."
        />
        <link rel="canonical" href="https://zfit.in/menu" />
        <meta property="og:title" content="ZFIT Menu" />
        <meta
          property="og:description"
          content="Explore ZFIT's high-protein and anti-aging meals. Filter by category, veg, and protein."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zfit.in/menu" />
      </Helmet>
      <div className="container">
        <div className="menu-header">
          <h2 className="section-title">Our Menu</h2>
          <p className="section-subtitle">
            Discover our delicious, nutritious meals designed for your health
            and fitness goals
          </p>
        </div>

        <div className="menu-filters">
          <div className="search-container">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="menu-page-layout">
          <aside className="menu-sidebar card">
            <div className="sidebar-header">
              <Filter />
              <h2>Advanced Filters</h2>
            </div>

            <div className="sidebar-section">
              <label htmlFor="menu-search" className="sidebar-label">
                Search
              </label>
              <div className="search-input-wrapper">
                <Search className="search-icon" />
                <input
                  id="menu-search"
                  type="text"
                  placeholder="Search menu items..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </div>
            </div>

            <div className="sidebar-section">
              <div className="sidebar-label">Category</div>
              <div className="sidebar-chips">
                {categories.map(category => (
                  <button
                    key={category.id}
                    className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                    aria-pressed={selectedCategory === category.id}
                  >
                    {category.icon}
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="sidebar-section">
              <label className="sidebar-checkbox">
                <input
                  type="checkbox"
                  checked={vegOnly}
                  onChange={e => setVegOnly(e.target.checked)}
                />
                Vegetarian only
              </label>
            </div>

            <div className="sidebar-section">
              <div className="sidebar-label">Protein (g)</div>
              <div className="protein-range">
                <input
                  type="range"
                  min={0}
                  max={200}
                  step={1}
                  value={proteinRange[0]}
                  onChange={e =>
                    setProteinRange([Number(e.target.value), proteinRange[1]])
                  }
                />
                <input
                  type="range"
                  min={0}
                  max={200}
                  step={1}
                  value={proteinRange[1]}
                  onChange={e =>
                    setProteinRange([proteinRange[0], Number(e.target.value)])
                  }
                />
                <div className="range-values">
                  <span>{proteinRange[0]}g</span>
                  <span>{proteinRange[1]}g</span>
                </div>
              </div>
            </div>

            <div className="sidebar-actions">
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setVegOnly(false);
                  setProteinRange([0, 200]);
                }}
              >
                Clear All
              </button>
            </div>
          </aside>

          <div className="menu-content">
            <div className="menu-grid">
              {filteredItems.length > 0 ? (
                filteredItems.map(item => (
                  <MenuItemCard key={item.id} item={item} />
                ))
              ) : (
                <div className="no-results">
                  <p>No items found matching your filters.</p>
                  <button
                    className="btn btn-secondary"
                    onClick={() => {
                      setSearchTerm('');
                      setSelectedCategory('all');
                      setVegOnly(false);
                      setProteinRange([0, 200]);
                    }}
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuPage;
