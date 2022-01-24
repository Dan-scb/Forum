import React from "react";
import './TopRanking.css'


export default props => {

   
    return <div className="TopRanking">
    <h3 className="title"> {props.title}</h3>
    <hr />
    <p>{props.content}</p>
    
    
</div>
}