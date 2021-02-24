import React, {useState} from 'react';
import DisplayComponent from './Components/DisplayComponent'
//import BtnComponent from './Components/BtnComponent'
import './App.css';
import Form from './Components/Form';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from './img/logo.png';



function App() {

  /////////////////////////////////////////////////////////
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();
/////////////////////////////////////////////////////////////


  return (
    <div className="main-section">

      <AppBar>
        <Toolbar>
        <img src={logo} style={{width:200, marginTop: -7}} />
        </Toolbar>
      </AppBar>
      
      <div className="clock-holder">
        <div className="stopwatch">
              <Form />  
        </div>

      </div>
      <footer> <div id="Copyright">&#60;Crafted by Akshad Kolhatkar&#62;</div></footer>
    </div>
  );
}

export default App;
