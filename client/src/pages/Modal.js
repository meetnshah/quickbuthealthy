// client/src/components/Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ meal, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <h2>{meal.name}</h2>
        <p><strong>Recommended Side:</strong> 8 Rotis</p>
        <p>{meal.description}</p>
        <div className="dropdowns">
          <details>
            <summary>Serving Size</summary>
            <p>{meal.serving_size}</p>
          </details>
          <details>
            <summary>Nutrition</summary>
            <p>Energy: {meal.energy} kcal</p>
            <p>Protein: {meal.protein} g</p>
            <p>Carbohydrates: {meal.carbohydrates} g</p>
            <p>Total Sugars: {meal.total_sugars} g</p>
            <p>Added Sugars: {meal.added_sugars} g</p>
            <p>Total Fat: {meal.total_fat} g</p>
            <p>Saturated Fat: {meal.saturated_fat} g</p>
            <p>Trans Fat: {meal.trans_fat} g</p>
            <p>Cholesterol: {meal.cholesterol} mg</p>
            <p>Sodium: {meal.sodium} mg</p>
          </details>
          <details>
            <summary>Ingredients</summary>
            <p>{meal.ingredients}</p>
          </details>
          <details>
            <summary>How to Prepare</summary>
            <p>{meal.how_to_cook}</p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Modal;
