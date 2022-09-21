import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import "./navbar.css"
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ContactPhoneOutlinedIcon from '@mui/icons-material/ContactPhoneOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <rtl>
    <Box 
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List > 
        {['שלום אורח', 'דיווח חדש'].map((text, index) => (
          <ListItem key={text} disablePadding className='listItems'>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <AccountCircleOutlinedIcon/> : <AddCircleOutlineOutlinedIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["היסטוריה",'צור קשר'].map((text, index) => (
          <ListItem key={text} disablePadding className='listItems'>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <HistoryOutlinedIcon/> :<MailIcon />    }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
    </rtl>
  );

  return (
    <rtl>
    <div >
      {[""].map((anchor) => (
        <React.Fragment key={anchor} >
          <Button className='sideButton' onClick={toggleDrawer(anchor, true)}> <MenuOutlinedIcon/> </Button>
          <Drawer 
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
    </rtl>
  );
}
