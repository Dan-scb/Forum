import React from "react";
import axios from "axios";
import {Route, Routes } from "react-router-dom";

import Home from "../views/Home";
import Topics from "../views/Topics";
import Quests from "../views/Quests";
import CreateTopic from "../views/contents/CreateTopic";
import QuestOpen from "../views/QuestOpen";
import CreateCategory from "../views/contents/CreateCategory";
import RenderQuest from "../views/contents/RenderQuest";
import RenderTopics from "../views/contents/RenderTopics";

export default props => {

   

    return  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topicos" element={<Topics />} />
        <Route path="/quests" element={<Quests />} />
        <Route path="/registopic" element={<CreateTopic />} />
        <Route path="/regisCategory" element={<CreateCategory />} />
        <Route path="/questopen/:id" element={<RenderQuest />} />
        <Route path="/categoryTopics/:id" element={<RenderTopics />} />
        
    </Routes>
}