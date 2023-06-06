import React, { useContext } from 'react'
import { AuthContext } from "../../views/Auth/Auth";
import styles from '../NavBar/nav.module.css'


export default class NavBar extends React.Component {
  static contextType = AuthContext;
  
render () 
{  
    return (
      <div>
      <div className="App">
        <div className="Elements">
        <a href="home">Owl Eyes </a>
        <a href="discover">Articles</a>
        </div>
        <div className="Auth">
      </div>

    </div> 
    </div>
    );
  }
}

  
NavBar.contextType = AuthContext;