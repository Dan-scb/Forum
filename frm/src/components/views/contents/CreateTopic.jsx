import React from "react";
import './CreateTopic.css'

export default props => {
    return <form action="" method="POST" className="form">
        <label htmlFor="title">Titulo</label>
        <input type="text" id="title" />
        <textarea name="body" id="body" cols="30" rows="10"></textarea>
        <button>Registrar Tópico</button>
    </form>
}