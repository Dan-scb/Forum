import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Nav from "./layout/Nav";
import Content from "./layout/Content";

export default props => {
    return <div>
        <Router>
        <Nav />
        <Content />
        </Router>
        
    </div>
}