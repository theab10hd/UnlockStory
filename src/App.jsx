import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <div id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/contact" element={<Home />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
