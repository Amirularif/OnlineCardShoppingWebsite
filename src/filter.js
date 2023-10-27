import React from 'react';
import './styles.css';

function Filter({ filterOptions, onFilterChange }) {
  const handleFilterChange = (filterName) => {
    onFilterChange(filterName);
  };

  return (
    <div className="filter-search-container">
      <div className="filter-group">
        <div className="filter-title">Generation</div>
        <div className="filter-item">
          <label>
            <input
              type="checkbox"
              checked={filterOptions.sortByGeneration}
              onChange={() => handleFilterChange('sortByGeneration')}
            />
            Sword & Shield
          </label>
        </div> 
        <div className="filter-item">
          <label>
            <input
              type="checkbox"
              checked={filterOptions.sortByGeneration}
              onChange={() => handleFilterChange('sortByGeneration')}
            />
            X & Y
          </label>
        </div>
        <div className="filter-item">
          <label>
            <input
              type="checkbox"
              checked={filterOptions.sortByGeneration}
              onChange={() => handleFilterChange('sortByGeneration')}
            />
            Black & White
          </label>
        </div>
        <div className="filter-item">
          <label>
            <input
              type="checkbox"
              checked={filterOptions.sortByGeneration}
              onChange={() => handleFilterChange('sortByGeneration')}
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
              checked={filterOptions.sortByStockStatus}
              onChange={() => handleFilterChange('sortByStockStatus')}
            />
            In Stock
          </label>
        </div>
        <div className="filter-item"> 
          <label>
            <input
              type="checkbox"
              checked={filterOptions.sortByStockStatus}
              onChange={() => handleFilterChange('sortByStockStatus')}
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
              checked={filterOptions.sortByStockStatus}
              onChange={() => handleFilterChange('sortByStockStatus')}
            />
            Mint 10
          </label>
        </div>
        <div className="filter-item">
          <label>
            <input
              type="checkbox"
              checked={filterOptions.sortByStockStatus}
              onChange={() => handleFilterChange('sortByStockStatus')}
            />
            Near Mint 9
          </label>
        </div>
        <div className="filter-item">
          <label>
            <input
              type="checkbox"
              checked={filterOptions.sortByStockStatus}
              onChange={() => handleFilterChange('sortByStockStatus')}
            />
            Near Mint 8
          </label>
        </div>
      </div>
    </div>
  );
}

export default Filter;
