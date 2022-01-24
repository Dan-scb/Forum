import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

import ShowCategory from "./contents/ShowCategory";
import './Quest.css'

export default class Category  extends Component {

    state = {
        categorys: []
    }

    componentDidMount(){
        axios.get('http://localhost:9000/getCategorys').then(res => {
            this.setState({categorys: res.data})
        })
    }
    render(){
        const {categorys} = this.state

        return <div className="Categorys">
       <Link to="/regisCategory"> <button className="regisCat">Criar categoria</button></Link>
        
        {categorys.map(e => {
          return  <ShowCategory key={e.id} id={e.id} category={e.name} />
        })}

    </div>

    }
     
}