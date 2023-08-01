import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import Navbar from "./components/navbar/Navbar";
import Pokedex from "./components/pokedex/Pokedex";

import "./index.css";
import { AppProvider } from "./AppContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/pokedex" element={<Pokedex />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
