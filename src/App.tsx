import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Patrons from "./pages/patrons";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/patrons" element={<Patrons />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
