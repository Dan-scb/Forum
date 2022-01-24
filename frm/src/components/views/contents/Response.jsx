import React from "react";
import './Response.css'

export default props => {
    return <form action="http://localhost:9000/regisResponse" method="post" className="Response">
        <input type="hidden" value={props.quest} name="quest" />
        <textarea name="response"  cols="30" rows="10"></textarea>
        <button>Enviar resposta</button>
    </form>
}