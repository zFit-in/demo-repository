import { useState } from 'react';
import { Search, Leaf, Zap, Utensils } from 'lucide-react';
import { menuData } from '../data/menu';
import MenuItemCard from './MenuItemCard';
import './MenuSection.css';

const MenuSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Items', icon: <Search /> },
    { id: 'high-protein', name: 'High Protein', icon: <Zap /> },
    { id: 'anti-aging', name: 'Anti Aging', icon: <Leaf /> },
    { id: 'bowls', name: 'Bowls', icon: <Utensils /> },
  ];

  const filteredItems = menuData.categories
    .flatMap(category => category.items)
    .filter(item => {
      const matchesSearch =
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.description &&
          item.description.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

  return (
    <section id="menu" className="menu-section">
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

        <div className="menu-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <MenuItemCard key={item.id} item={item} />
            ))
          ) : (
            <div className="no-results">
              <p>No items found matching your search criteria.</p>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                }}
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
