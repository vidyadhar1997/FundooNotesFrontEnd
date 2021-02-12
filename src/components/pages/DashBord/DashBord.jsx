import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import EmojiObjectsOutlinedIcon from "@material-ui/icons/EmojiObjectsOutlined";
import ArchiveOutlinedIcon from "@material-ui/icons/ArchiveOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from '@material-ui/core';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import '../DashBord/DashBord.scss';
import FundooImage from '../../../assets/logo.png'
import AccountImage from '../../../assets/imageicon.png'
import Card from '@material-ui/core/Card';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import { Button } from '@material-ui/core';


const drawerWidth = 250;
const drawerTopMargin = 65;
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: "100px",
  },
  appBar: {
    width: "100%",
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    marginTop: drawerTopMargin,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    marginTop: drawerTopMargin,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    marginTop: drawerTopMargin,
    borderStyle: "none",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();

  //rect hook
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const [card, setCard] = React.useState(false);
  const icon = () => {
    setCard(!card);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="white"
        className={clsx(classes.appBar)}
      >
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start"
            className={clsx(classes.menuButton)} ><MenuIcon /> </IconButton>
          <div>
            <img src={FundooImage} />
          </div>
          <Typography id="name" variant="h6" noWrap>
            Fundoo Note
          </Typography>
          <div className="searchBar">
            <div>
              <IconButton><SearchIcon /></IconButton>
            </div>
            <div className="inputtextField">
              <TextField placeholder="Search"
                InputProps={{ disableUnderline: true, }} multiline fullWidth>search</TextField>
            </div>
          </div>
          <div className="Account"><IconButton onClick={icon}><AccountCircleOutlinedIcon fontSize="large" /></IconButton></div>
          {card ? <Card id="card">
            <div >
              <img id="accountCircle" src={AccountImage} />
            </div>
            <div className="main-personIcon">
              <div id="personIcon">
                <PersonAddOutlinedIcon /> Add another account
          </div>
            </div>
            <div id="button">
              <Button variant="outlined" id="button">sigin out</Button>
            </div>
          </Card> : undefined}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <List>
          <ListItem button key={'Notes'}>
            <ListItemIcon  ><EmojiObjectsOutlinedIcon /></ListItemIcon>
            <ListItemText primary={'Notes'} />
          </ListItem>
          <ListItem button key={'Remainders'}>
            <ListItemIcon><NotificationsOutlinedIcon /></ListItemIcon>
            <ListItemText primary={'Remainders'} />
          </ListItem>
          <ListItem button key={'Lable'}>
            <ListItemIcon>< LabelOutlinedIcon /></ListItemIcon>
            <ListItemText primary={'Lable'} />
          </ListItem>
          <ListItem button key={'Editlabels'} >
            <ListItemIcon>< EditOutlinedIcon /></ListItemIcon>
            <ListItemText primary={'Edit labels'} />
          </ListItem>
          <ListItem button key={'Archive'}>
            <ListItemIcon ><ArchiveOutlinedIcon /></ListItemIcon>
            <ListItemText primary={'Archive'} />
          </ListItem>
          <ListItem button className="trash">
            <ListItemIcon >< DeleteOutlinedIcon /></ListItemIcon>
            <ListItemText primary={'Trash'} />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}