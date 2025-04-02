import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbarpage/Navbar";
import Home from "./Components/homepage/Home";
import Donate from "./Components/donatepage/Donate";
// import About from "./Components/aboutpage/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </Router>
  );
}

export default App;
