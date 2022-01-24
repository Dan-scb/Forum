import React from "react";

import './CreateCategory.css'

export default props => {
    return <form action="http://localhost:9000/regisCategory" method="POST" className="CreateCategory">
        <label for="name">Título</label>
        <input type="text" name="name" />
        <button>Registrar categoria</button>    
    </form>
    
}