import React from "react";
import './ShowCategory.css'
import { Link } from "react-router-dom";

export default props => {
    const url = `/categoryTopics/${props.id}`
    return <div className="ShowCatg">
       <Link to={url}> <h2>{props.category}</h2></Link>
    </div>
}