import React from "react";
import './Card.css'

export default props => {

    return <div className="Card">
        <h3 className="title"> {props.title}</h3>
        <p>{props.content}</p>
        <hr />
        <strong>{props.category}</strong>
    </div>
}