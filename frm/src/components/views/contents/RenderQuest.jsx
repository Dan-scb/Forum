import React from "react";
import {useParams } from "react-router-dom";

import TopicOpen from "../TopicOpen.jsx";

export default props => {
    const {id} = useParams()

    
        return <div>  
    <TopicOpen identity={id} />
    </div>
    
    
}


