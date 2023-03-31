import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Quadratmeter from "./pages/Quadratmeter";
import Tesdpage from "./pages/Tesdpage";
import Summe from "./pages/Summe";

export default function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<NoPage />} />
          <Route path="Quadratmeter" element={<Quadratmeter />} />
          <Route path="Tesdpage" element={<Tesdpage />} />
          <Route path="Summe" element={<Summe />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);