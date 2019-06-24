import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';
import Auth from './Components/Auth/Auth';
import routes from './routes';
import {withRouter} from 'react-router-dom'

function App(props) {
  console.log(props)
  return (
    <div className="App">
    
    {props.location.pathname === '/' ?
    (<Auth />)
    :
    (
    <><Nav />
    {routes}</>)
   }
    </div>
  );
}

export default withRouter(App) ;
