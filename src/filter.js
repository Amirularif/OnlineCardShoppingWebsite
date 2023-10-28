import React from 'react';
import './styles.css';

function Filter({ filterOptions, onFilterChange }) {
  const handleFilterChange = (filterName, isChecked) => {
    onFilterChange(filterName, isChecked);
  };

  return (
    <div className="filter-search-container">
      <div className="filter-group">
        <div className="filter-title">Generation</div>
        <div className="filter-item">
          <label>
            <input
              type="checkbox"
              checked={filterOptions.SwordandShield}
              onChange={(e) => handleFilterChange('SwordandShield', e.target.checked)}
            />
            Sword & Shield
          </label>
        </div>
        <div className="filter-item">
          <label>
            <input
              type="checkbox"
              checked={filterOptions.XandY}
              onChange={(e) => handleFilterChange('XandY', e.target.checked)}
            />
            X & Y
          </label>
        </div>
        <div className="filter-item">
          <label>
            <input
              type="checkbox"
              checked={filterOptions.BlackandWhite}
              onChange={(e) => handleFilterChange('BlackandWhite', e.target.checked)}
            />
            Black & White
          </label>
        </div>
        <div className="filter-item">
          <label>
            <input
              type="checkbox"
              checked={filterOptions.ScarletandViolet}
              onChange={(e) => handleFilterChange('ScarletandViolet', e.target.checked)}
            />
            Scarlet & Violet
          </label>
        </div>
      </div>
      <div className="filter-group">
        <div className="filter-title">Stock Status</div>
        <div className="filter-item">
          <label>
            <input
              type="checkbox"
              checked={filterOptions.InStock}
              onChange={(e) => handleFilterChange('InStock', e.target.checked)}
            />
            In Stock
          </label>
        </div>
        <div className="filter-item">
          <label>
            <input
              type="checkbox"
              checked={filterOptions.OutofStock}
              onChange={(e) => handleFilterChange('OutofStock', e.target.checked)}
            />
            Out of Stock
          </label>
        </div>
      </div>
      <div className="filter-group">
        <div className="filter-title">Condition</div>
        <div className="filter-item">
          <label>
            <input
              type="checkbox"
              checked={filterOptions.Condition10}
              onChange={(e) => handleFilterChange('Condition10', e.target.checked)}
            />
            Mint 10
          </label>
        </div>
        <div className="filter-item">
          <label>
            <input
              type="checkbox"
              checked={filterOptions.Condition9}
              onChange={(e) => handleFilterChange('Condition9', e.target.checked)}
            />
            Near Mint 9
          </label>
        </div>
        <div className="filter-item">
          <label>
            <input
              type="checkbox"
              checked={filterOptions.Condition8}
              onChange={(e) => handleFilterChange('Condition8', e.target.checked)}
            />
            Near Mint 8
          </label>
        </div>
      </div>
    </div>
  );
}

export default Filter;
