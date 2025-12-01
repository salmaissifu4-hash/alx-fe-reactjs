import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../data.json';

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [steps, setSteps] = useState('');
  const [image, setImage] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    if (!title) newErrors.title = 'Title is required.';
    if (!summary) newErrors.summary = 'Summary is required.';
    if (!ingredients) newErrors.ingredients = 'Ingredients are required.';
    if (!instructions) newErrors.instructions = 'Instructions are required.';
    if (!steps) newErrors.steps = 'Steps are required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const newRecipe = {
      id: data.length + 1,
      title,
      summary,
      ingredients: ingredients.split('\n').filter(ingredient => ingredient.trim() !== ''),
      instructions: instructions.split('\n').filter(step => step.trim() !== ''),
      steps: steps.split('\n').filter(step => step.trim() !== ''),
      image: image || '/assets/images/default.jpg'
    };

    onAddRecipe(newRecipe);
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white p-8 md:p-12">
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Add New Recipe</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-bold mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.title && <p className="text-red-500">{errors.title}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">Summary</label>
            <textarea
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              rows="2"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.summary && <p className="text-red-500">{errors.summary}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">Ingredients (Separate by new line)</label>
            <textarea
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.ingredients && <p className="text-red-500">{errors.ingredients}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">Instructions (Separate by new line)</label>
            <textarea
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              rows="6"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.instructions && <p className="text-red-500">{errors.instructions}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">Steps (Separate by new line)</label>
            <textarea
              value={steps}
              onChange={(e) => setSteps(e.target.value)}
              rows="6"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
            {errors.steps && <p className="text-red-500">{errors.steps}</p>}
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2">Image URL (Optional)</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-bold rounded shadow hover:bg-blue-600 transition"
          >
            Add Recipe
          </button>
        </form>
      </div>
    </div>
  );
};export default AddRecipeForm;
