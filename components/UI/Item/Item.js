import { ItemContainer, IteamHeader, ActionsColumn } from './Item.styles';

function Item({id, name, editItem, deleteItem}) {
  const editActionLabel = "Edit";
  const deleteActionLabel = "Delete";

  function editAction(id) {
    editItem(id);
  };

  function deleteAction(id) {
    deleteItem(id);
  }

  return (
    <ItemContainer>
      <IteamHeader>
        <span>{name}</span>
        <ActionsColumn>
          <span onClick={() => editAction(id)}>{editActionLabel}</span>
          <span onClick={() => deleteAction(id)}>{deleteActionLabel}</span>
        </ActionsColumn>
      </IteamHeader>
    </ItemContainer>
  );
};

export default Item;