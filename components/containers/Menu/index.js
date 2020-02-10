import MenuComponent from '../../UI/Menu/Menu';

function Menu() {
  const links = [
    {id: 1, page: "/", text: "Home"},
    {id: 2, page: "/product", text: "New Product"},
    {id: 3, page: "/profile", text: "Profile"},
    {id: 4, page: "/login", text: "Login"},
  ];

  return (
    <MenuComponent links={links} />
  )
}

export default Menu;