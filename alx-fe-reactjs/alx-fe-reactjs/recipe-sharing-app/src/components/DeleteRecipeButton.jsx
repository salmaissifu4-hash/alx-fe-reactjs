// DeleteRecipeButton.jsx
import useRecipeStore from '../store/recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(id);
    alert('Recipe deleted successfully!');
    navigate('/');
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
