import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from './App';
import DetailPage from './DetailPage';


const RouterApp = () => {
    <BrowserRouter>
        <div>
            <Routes>
                <Route path="/" exact element={<App />} />
                <Route path="/detail_page" element={<DetailPage />} />
            </Routes>
        </div>
    </BrowserRouter>
}


export default RouterApp;