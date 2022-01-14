import React from "react";
import { Link } from "react-router-dom";

import CreateTopic from "./contents/CreateTopic";
import ShowCategory from "./contents/ShowCategory";

export default props => {
    return <div>
        <button><Link to="/regiscatg">Criar categoria</Link></button>
        <ShowCategory />

    </div>
     
}