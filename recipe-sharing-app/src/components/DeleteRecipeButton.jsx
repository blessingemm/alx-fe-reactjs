import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ id, onDelete }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  const handleDelete = () => {
    deleteRecipe(id);
    onDelete?.();
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default DeleteRecipeButton;
