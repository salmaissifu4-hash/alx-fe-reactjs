import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = data.find(recipe => recipe.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center text-2xl mt-10 text-gray-700">Recipe Not Found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <img src={recipe.image} alt={recipe.title} className="w-full h-80 object-cover" />
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
          <p className="text-gray-600 mb-6">{recipe.summary}</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-2">Ingredients</h2>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mb-2">Instructions</h2>
          <ol className="list-decimal list-inside text-gray-700 mb-6 space-y-2">
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>

          <Link to="/">
            <button className="px-5 py-2 bg-blue-500 text-white font-semibold rounded-xl shadow hover:bg-blue-600 transition-colors">Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
