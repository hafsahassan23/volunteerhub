import React from "react";
//mid app jsx u dhow waye ./ ; ../ src meel ka baxsan waye
import Home from "./pages/Home";
import Footer from "./components/layouts/Footer";
import Header from "./components/layouts/Header";
import Volunteers from "./pages/Volunteers";
import Register from "./pages/Register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/volunteers" element={< Volunteers />} />
            <Route path="/register" element={< Register />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>

    // without ROuter
    // {/* filehome ka wacee */}
    // {/* <Home /> */}
  );
}

export default App;
