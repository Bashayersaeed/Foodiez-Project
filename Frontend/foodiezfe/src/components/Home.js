import React from 'react';

function Home() {
  const categories = [
    { id: 1, name: 'Main Course Arabic', image: 'Makboos.jfif' },
    { id: 2, name: 'Main Course Western', image: 'Burger.jfif' },
    { id: 3, name: 'Salads', image: 'salad.jfif' },
    { id: 4, name: 'Desserts', image: 'dessert.jfif' },
    { id: 5, name: 'Beverages', image: 'drinks.jfif' }
  ];

  return (
    <div className="home-container">
      <h2>Welcome to KBOG Foodiez</h2>
      <div className="categories-grid">
        {categories.map(category => (
          <div key={category.id} className="category-card">
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;