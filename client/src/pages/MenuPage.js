import React, { useState, useEffect } from 'react';
import './MenuPage.css';
import Modal from './Modal';

const Menu = () => {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('http://127.0.0.1:5000/api/meals');
      const data = await response.json();
      setMeals(data);
    };

    fetchMeals();
  }, []);

  const handleMealClick = (meal) => {
    setSelectedMeal(meal);
  };

  const handleCloseModal = () => {
    setSelectedMeal(null);
  };

  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <div className="meal-list">
        {meals.map((meal) => (
          <div className="meal-item" key={meal.id} onClick={() => handleMealClick(meal)}>
            <img src={meal.image} alt={meal.name} className="meal-image" />
            <div className="meal-details">
              <h2>{meal.name}</h2>
              <p>{meal.description}</p>
              <p>Price: ₹:{meal.price}</p>
            </div>
          </div>
        ))}
      </div>
      {selectedMeal && <Modal meal={selectedMeal} onClose={handleCloseModal} />}
    </div>
  );
};

export default Menu;
