import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './component/Header';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Items from "./pages/Items";
import Mobs from "./pages/Mobs";
import Updates from "./pages/Updates";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/Items" element={<Items />} />
                <Route path="/Mobs" element={<Mobs />}/>
                <Route path="/Updates" element={<Updates />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
