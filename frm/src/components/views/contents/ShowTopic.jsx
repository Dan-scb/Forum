import React from "react";
import './ShowTopic.css'

export default props => {

        
    return <div className="ShowTopic">
        <h3>{props.title}</h3>
        <span>
            <strong>Respostas: {props.resp}</strong>
            <strong>Data:</strong>
        </span>
    </div>
}