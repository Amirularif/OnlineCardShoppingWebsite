import React from 'react';
import './styles.css';

function Filter({ filterOptions, onFilterChange }) {
  const SortbyText = " SORT : "; 
  const handleFilterChange = (filterName) => {
    onFilterChange(filterName);
  };

  return (
    <div className="filter-search-container">
      <div className="filter-header">
        {SortbyText}
      </div>
      <div className="filter-group">
        <div className="filter-title">Generation</div>
        <div className="filter-item">
          <label>
            <input
              type="radio"
              name="generation"
              checked={filterOptions.SwordandShield}
              onChange={() => handleFilterChange('SwordandShield')}
            />
            Sword & Shield
          </label>
        </div>
        <div className="filter-item">
          <label>
            <input
              type="radio"
              name="generation"
              checked={filterOptions.XandY}
              onChange={() => handleFilterChange('XandY')}
            />
            X & Y
          </label>
        </div>
        <div className="filter-item">
          <label>
            <input
              type="radio"
              name="generation"
              checked={filterOptions.BlackandWhite}
              onChange={() => handleFilterChange('BlackandWhite')}
            />
            Black & White
          </label>
        </div>
        <div className="filter-item">
          <label>
            <input
              type="radio"
              name="generation"
              checked={filterOptions.ScarletandViolet}
              onChange={() => handleFilterChange('ScarletandViolet')}
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
