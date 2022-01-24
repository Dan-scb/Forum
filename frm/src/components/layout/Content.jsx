import React from "react";
import axios from "axios";
import {Route, Routes } from "react-router-dom";

import Home from "../views/Home";
import Topics from "../views/Topics";
import Category from "../views/Category";
import CreateTopic from "../views/contents/CreateTopic";
import CreateCategory from "../views/contents/CreateCategory";
import RenderQuest from "../views/contents/RenderQuest";
import RenderTopics from "../views/contents/RenderTopics";

export default props => {

   

    return  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topicos" element={<Topics />} />
        <Route path="/quests" element={<Category />} />
        <Route path="/registopic" element={<CreateTopic />} />
        <Route path="/regisCategory" element={<CreateCategory />} />
        <Route path="/questopen/:id" element={<RenderQuest />} />
        <Route path="/categoryTopics/:id" element={<RenderTopics />} />
        
    </Routes>
}