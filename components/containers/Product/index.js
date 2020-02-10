import { useState } from 'react';
import NewProductForm from '../../UI/Forms/NewProductForm/NewProductForm';

function Product({createProduct, token}) {
  const [description, setDescription] = useState(null);
  const [isActive, setIsActive] = useState(null);
  const descriptionLabel = "Description";
  const checkboxnLabel = "Is active";
  const buttonText = "Create";

  function editDescription(e) {
    setDescription(e.target.value);
  };

  function editIsActive(e) {
    setIsActive(e.target.value);
  };

  function createItem() {
    createProduct(token, {
      description: description,
      isActive: isActive
    })
  };

  return (
    <NewProductForm 
      descriptionLabel={descriptionLabel}
      checkboxnLabel={checkboxnLabel}
      description={description}
      setDescription={editDescription}
      isActive={isActive}
      setIsActive={editIsActive}
      onClick={createItem}
      buttonText={buttonText}
    />
  )
};

export default Product;