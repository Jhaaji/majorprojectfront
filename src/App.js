import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainRouter from "./MainRouter";
import complaint_type from "./core/complaint_type";

const App = () => (
    <BrowserRouter>
         <MainRouter />
    </BrowserRouter>
);

export default App;
