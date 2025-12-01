import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../data.json';

const HomePage = ({ recipes }) => {
  const [localRecipes, setLocalRecipes] = useState([]);

  useEffect(() => {
    setLocalRecipes(recipes.length ? recipes : data); // Load data.json if no recipes are passed as props
  }, [recipes]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-8 md:p-12">
      <h1 className="text-5xl font-bold text-center mb-12 text-gray-800 drop-shadow-xl">Recipe Sharing Platform</h1>
      
      <div className="flex justify-center mb-6">
        <Link to="/add-recipe">
          <button className="px-6 py-2 bg-green-500 text-white font-bold rounded-xl shadow hover:bg-green-600 transition">
            Add New Recipe
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {localRecipes.map(recipe => (
          <div key={recipe.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:scale-105 transition-all">
            <img src={recipe.image} alt={recipe.title} className="w-full h-56 object-cover rounded-t-2xl" />
            <div className="p-5">
              <h2 className="text-2xl font-bold text-gray-800 mb-3">{recipe.title}</h2>
              <p className="text-gray-600 mb-4">{recipe.summary}</p>
              <Link to={`/recipe/${recipe.id}`}>
                <button className="px-5 py-2 bg-blue-500 text-white font-semibold rounded-xl shadow hover:bg-blue-600 transition-colors">View Recipe</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
