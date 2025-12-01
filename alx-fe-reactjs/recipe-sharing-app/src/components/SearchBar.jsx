import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  useEffect(() => {
    filterRecipes(); // Trigger filtering whenever the search term changes
  }, [searchTerm, filterRecipes]);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;