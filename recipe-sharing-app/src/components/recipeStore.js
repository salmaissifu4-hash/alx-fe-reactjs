import create from 'zustand';

const useRecipeStore = create((set) => ({
  // Recipes array
  recipes: [],

  // Favorites array
  favorites: [],

  // Recommendations array
  recommendations: [],

  // Actions for managing recipes
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe: (recipeId) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
    })),
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),
  setRecipes: (recipes) => set({ recipes }),

  // Actions for managing favorites
  addFavorite: (recipeId) =>
    set((state) => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Actions for generating recommendations
  generateRecommendations: () =>
    set((state) => {
      // Mock implementation: Recommend recipes based on favorites
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),

  // Search and filtering functionality
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
}));

export default useRecipeStore;