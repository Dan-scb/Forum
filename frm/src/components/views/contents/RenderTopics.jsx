import React, { Component } from "react";
import { useParams } from "react-router-dom";

import CategoryTopics from "./CategoryTopics";

export default props => {
    const {id} = useParams()

        return <>
            <CategoryTopics id={id}/>
        </>
    }
