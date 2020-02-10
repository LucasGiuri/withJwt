import { FormContainer } from './NewProductForm.styles';
import { FormLabel, Input, FormControl } from '@material-ui/core';
import Button from '../../Button/Button';

function Form({descriptionLabel, buttonText, description, setDescription, onClick}) {
  return (
    <FormContainer>
      <FormControl>
        <FormLabel>{descriptionLabel}</FormLabel>
        <Input type="text" value={description} onChange={setDescription} />
      </FormControl>
      <Button text={buttonText} onClick={onClick} />
    </FormContainer>
  )

};

export default Form;