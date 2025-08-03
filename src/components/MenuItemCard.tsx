import { useState } from 'react';
import { Zap, Heart, ImageIcon } from 'lucide-react';
import { MenuItem } from '../types/menu';
import './MenuItemCard.scss';

interface MenuItemCardProps {
  item: MenuItem;
}

const MenuItemCard = ({ item }: MenuItemCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const getCategoryIcon = () => {
    switch (item.category) {
      case 'anti-aging':
        return <Heart className="category-icon" />;
      case 'high-protein':
        return <Zap className="category-icon" />;
      default:
        return null;
    }
  };

  const getCategoryBadge = () => {
    switch (item.category) {
      case 'anti-aging':
        return <span className="badge badge-info">Anti-Aging</span>;
      case 'high-protein':
        return <span className="badge badge-success">High Protein</span>;
      case 'bowls':
        return <span className="badge badge-warning">Complete Meal</span>;
      default:
        return null;
    }
  };

  return (
    <div className="menu-item-card card">
      {item.image && (
        <div className="menu-item-image">
          {!imageLoaded && !imageError && (
            <div className="image-loading">
              <ImageIcon className="loading-icon" />
              <span>Loading...</span>
            </div>
          )}

          {imageError && (
            <div className="image-error">
              <ImageIcon className="error-icon" />
              <span>Image not available</span>
            </div>
          )}

          <img
            src={item.image}
            alt={item.name}
            className={`menu-image ${imageLoaded ? 'loaded' : ''}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => {
              setImageError(true);
              setImageLoaded(false);
            }}
          />
        </div>
      )}

      <div className="menu-item-content">
        <div className="menu-item-header">
          <div className="menu-item-title">
            <h3>{item.name}</h3>
            {getCategoryIcon()}
          </div>
          <div className="menu-item-badges">
            {getCategoryBadge()}
            {item.isVegetarian && (
              <span className="badge badge-success">Vegetarian</span>
            )}
          </div>
        </div>

        {item.description && (
          <p className="menu-item-description">{item.description}</p>
        )}

        <div className="menu-item-nutrition">
          <div className="nutrition-item">
            <span className="nutrition-label">Calories:</span>
            <span className="nutrition-value">{item.calories} kcal</span>
          </div>
          <div className="nutrition-item">
            <span className="nutrition-label">Protein:</span>
            <span className="nutrition-value protein-highlight">
              {item.protein}g
            </span>
          </div>
        </div>

        <div className="menu-item-footer">
          <div className="menu-item-price">
            <span className="price-currency">₹</span>
            <span className="price-amount">{item.price}</span>
          </div>
          <button className="btn btn-primary order-btn">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
