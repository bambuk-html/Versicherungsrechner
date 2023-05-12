import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Quadratmeter from "./pages/Quadratmeter";
import Tesdpage from "./pages/Tesdpage";
import Summe from "./pages/Summe";
import  "./App.css"


export default function App() {
  return (
    <div className="homediv">
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
          <Route path="Quadratmeter" element={<Quadratmeter />} />
          <Route path="Tesdpage" element={<Tesdpage />} />
          <Route path="Summe" element={<Summe />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);