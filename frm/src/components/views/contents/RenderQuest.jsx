import React from "react";
import {useParams } from "react-router-dom";

import QuestOpen from "../QuestOpen.jsx";

export default props => {
    const {id} = useParams()

    
        return <div>  
    <QuestOpen identity={id} />
    </div>
    
    
}


