import React from "react";

import {Route, Routes } from "react-router-dom";

import Home from "../views/Home";
import Topics from "../views/Topics";
import Quests from "../views/Quests";
import CreateTopic from "../views/contents/CreateTopic";
export default props => {

    return  <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topicos" element={<Topics />} />
        <Route path="/quests" element={<Quests />} />
        <Route path="/regiscatg" element={<CreateTopic />} />
    </Routes>
}