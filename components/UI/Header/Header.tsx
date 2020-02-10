import { useState } from 'react';
import Menu from '../../containers/Menu';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

function Header() {
  const [menu, setMenuStatus] = useState(false);

  function toggleDrawer() :void {
    setMenuStatus(!menu);
  };

  function sideList() {
    return (
      <div
        role="presentation"
        onClick={toggleDrawer}
        onKeyDown={toggleDrawer}
      >
      <Menu />
      </div>
    )
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Drawer open={menu} onClose={toggleDrawer}>
          {sideList()}
        </Drawer>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          Vintra !
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;