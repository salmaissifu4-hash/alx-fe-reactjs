import { useRecipeStore } from './recipeStore';
import { Link } from 'react-router-dom'; // Ensure Link is imported

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const favorites = useRecipeStore((state) => state.favorites);
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);

  return (
    <div>
      {filteredRecipes.map((recipe) => (
        <div key={recipe.id}>
          {/* Wrap the recipe title in a Link for navigation */}
          <Link to={`/recipe/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description}</p>
          {/* Add/Remove Favorite Button */}
          {favorites.includes(recipe.id) ? (
            <button onClick={() => removeFavorite(recipe.id)}>
              Remove Favorite
            </button>
          ) : (
            <button onClick={() => addFavorite(recipe.id)}>
              Add Favorite
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default RecipeList;