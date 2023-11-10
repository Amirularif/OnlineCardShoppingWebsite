import React from 'react';
import Slider from 'rc-slider';
import "rc-slider/assets/index.css";
import '../styles.css';

function Filter({ filterOptions, onFilterChange }) {
  const SortbyText = " FILTER: ";

  const handleFilterChange = (filterName, isChecked) => {
    onFilterChange(filterName, isChecked);

  };

  return (
    <div className="filter-search-container">
      <div className="filter-header">
        {SortbyText}
      </div>
      <div className="filter-group">
        <div className="filter-title">Generation</div>
        <div className="filter-item">
          <label>Sword & Shield</label>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={filterOptions.SwordandShield}
              onChange={(e) => handleFilterChange('SwordandShield', e.target.checked)}
            />
            <span className="slider"></span>
          </label>
        </div>
        <div className="filter-item">
          <label>Sun & Moon</label>
          <label className="toggle-switch">
            <input
              type="checkbox"
              checked={filterOptions.SunandMoon}
              onChange={(e) => handleFilterChange('SunandMoon', e.target.checked)}
            />
            <span className="slider"></span>
          </label>
        </div>
        <div className="filter-item">
          <label>Black & White</label>
          <label className="toggle-switch">
            <input
                type="checkbox"
                checked={filterOptions.BlackandWhite}
                onChange={(e) => handleFilterChange('BlackandWhite', e.target.checked)}
              />
              <span className="slider"></span>
          </label>
        </div>
        <div className="filter-item">
          <label>Scarlet & Violet</label>
          <label className="toggle-switch">
            <input
                type="checkbox"
                checked={filterOptions.ScarletandViolet}
                onChange={(e) => handleFilterChange('ScarletandViolet', e.target.checked)}
              />
              <span className="slider"></span>
          </label>
        </div>
      </div>
      <div className="filter-group">
        <div className="filter-title">Stock Status</div>
        <div className="filter-item">
          <label>In Stock</label>
          <label className="toggle-switch">
            <input
                type="checkbox"
                checked={filterOptions.InStock}
                onChange={(e) => handleFilterChange('InStock', e.target.checked)}
              />
              <span className="slider"></span>
          </label>
        </div>
        <div className="filter-item">
          <label>Out of Stock</label>
          <label className="toggle-switch">
            <input
                type="checkbox"
                checked={filterOptions.OutofStock}
                onChange={(e) => handleFilterChange('OutofStock', e.target.checked)}
              />
              <span className="slider"></span>
          </label>
        </div>
      </div>
      <div className="filter-group">
        <div className="filter-title">Condition</div>
        <div className="filter-item">
          <label>Mint 10</label>
          <label className="toggle-switch">
            <input
                type="checkbox"
                checked={filterOptions.Condition10}
                onChange={(e) => handleFilterChange('Condition10', e.target.checked)}
              />
              <span className="slider"></span>
          </label>
        </div>
        <div className="filter-item">
          <label>Near Mint 9</label>
          <label className="toggle-switch">
            <input
                type="checkbox"
                checked={filterOptions.Condition9}
                onChange={(e) => handleFilterChange('Condition9', e.target.checked)}
              />
              <span className="slider"></span>
          </label>
        </div>
        <div className="filter-item">
          <label>Near Mint 8</label>
          <label className="toggle-switch">
            <input
                type="checkbox"
                checked={filterOptions.Condition8}
                onChange={(e) => handleFilterChange('Condition8', e.target.checked)}
              />
              <span className="slider"></span>
          </label>
        </div>
      </div>
      <div className="filter-group">
        <div className="filter-title">Price</div>
        <div className="filter-item">
          <Slider/>
        </div>
      </div>
    </div>
  );
}

export default Filter;
