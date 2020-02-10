import { Grid, FiltersContainer, AvgFilter, ButtonContainer } from './List.styles';
import Title from '../Title/Title';
import Item from '../Item/Item';
import Button from '../Button/Button';
import NavLink from '../NavLink/NavLink';

interface ListType {
  id: number;
  description: string;
};

interface ListProps {
  list: ListType[];
  sortByName?: () => void;
  deleteItem?: () => void;
  editItem?: () => void;
};

function List(props: ListProps) {
  const { list, sortByName, editItem, deleteItem } = props;
  const productName = "Sensor Name";
  const editLabel = "Edit";
  const deleteLabel = "Delete";
  const buttonText = "Add a new product";

  return (
    <Grid>
      <FiltersContainer>
        <span id="sortByName" onClick={sortByName}>{productName}</span>
        <AvgFilter>
          <span id="editLabel">{editLabel}</span>
          <span id="deleteLabel">{deleteLabel}</span>
        </AvgFilter>
      </FiltersContainer>
      {list && list.length > 0 ? 
        list.map(item => {
          const { id, description } = item;
          return (
            <Item key={id} id={id} name={description} editItem={editItem} deleteItem={deleteItem} />
          )
        }) : 
        <Title text={"No results Found :("} centered={true} />
      }
      <ButtonContainer>
        <NavLink href={"/product"} as={"/product"}>
          <Button text={buttonText} onClick={() => {}} />
        </NavLink>
      </ButtonContainer>
    </Grid>
  )
};

export default List;