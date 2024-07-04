import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from './views/HomeView';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" elment={<HomeView />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;