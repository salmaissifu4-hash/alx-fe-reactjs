import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import RecipeDetail from './components/RecipeDetail';
import AddRecipeForm from './components/AddRecipeForm';
import data from './data.json';
const App = () => {
  const [recipes, setRecipes] = useState(data);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage recipes={recipes} />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
        <Route path="/add-recipe" element={<AddRecipeForm onAddRecipe={handleAddRecipe} />} />
      </Routes>
    </Router>
  );
};

export default App;
