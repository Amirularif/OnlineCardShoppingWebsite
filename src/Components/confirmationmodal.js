import React from 'react';
import '../styles.css'; // Import your confirmation modal styles

function ConfirmationModal({ onConfirm, onCancel }) {
  return (
    <div className="confirmation-modal-overlay">
      <div className="confirmation-modal">
        <p>Are you sure you want to remove this item from your cart?</p>
        <div className="confirmation-modal-buttons">
          <button className="confirm-button" onClick={onConfirm}>
            Yes
          </button>
          <button className="cancel-button" onClick={onCancel}>
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
