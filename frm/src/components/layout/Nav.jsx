import React from "react";
import {Link} from 'react-router-dom'
import './Nav.css'
export default props => {
  return  <nav className="Nav">
        <ul>
            <li>
                <Link to="/">Início</Link>
            </li>
            <li>
                <Link to="/quests">Categorias</Link>
            </li>
            <li>
                <Link to="/topicos">Topicos</Link>
            </li>
            
        </ul>
    </nav>
}