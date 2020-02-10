import NavLink from '../NavLink/NavLink';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

interface Links {
  id: string;
  page: string;
  text: string;
};

interface MenuProps {
  links: Links[];
};

function MenuComponent(props: MenuProps) {
  const { links } = props;
  return (
    <List>
      {links.map(link => {
        const { id, page, text } = link;
        return (
          <NavLink key={id} href={page} as={page}>
            <ListItem button key={id}>
              <ListItemText primary={text} />
            </ListItem>
          </NavLink>
        )
      })}
    </List>
  );
};

export default MenuComponent;