import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import About from "./About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}

export default App;
