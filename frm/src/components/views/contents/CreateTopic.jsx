import axios from "axios";
import React, { Component } from "react";
import './CreateTopic.css'

export default class CreateTopic extends Component {

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
    return <form action="http://localhost:9000/regisTopic" method="POST" className="form">
        <label htmlFor="title">Titulo</label>
        <input type="text" id="title" name="title" />
        <textarea name="body" id="body" cols="30" rows="10"></textarea>
        <label htmlFor="categoria">Categoria</label>
        <select name="categoria" >
            {categorys.map(category => {
                return <option key={category.id} value={category.id}>{category.name}</option>
            })}
            
        </select>
        <button>Registrar Tópico</button>
    </form>
    }
}