import React from 'react';
import './Modal.css';

const Modal = ({ meal, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2 className="text-2xl font-bold mb-4 text-primary">{meal.name}</h2>
        <div className="image-container">
          <img src={meal.image} alt={meal.name} className="modal-image" />
        </div>
        {/* <p className="mb-4"><strong>Recommended Side:</strong> 8 Rotis</p> */}
        <p className="mb-4">{meal.description}</p>
        <div className="dropdowns">
          <details className="mb-4">
            <summary className="cursor-pointer font-bold text-primary">Serving Size</summary>
            <p className="mt-2">{meal.serving_size}</p>
          </details>
          <details className="mb-4">
            <summary className="cursor-pointer font-bold text-primary">Nutrition</summary>
            <p className="mt-2">Energy: {meal.energy} kcal</p>
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
          <details className="mb-4">
            <summary className="cursor-pointer font-bold text-primary">Ingredients</summary>
            <p className="mt-2">{meal.ingredients}</p>
          </details>
          <details>
            <summary className="cursor-pointer font-bold text-primary">How to Prepare</summary>
            <p className="mt-2">{meal.how_to_cook}</p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Modal;
