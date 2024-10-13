import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import About from "./About";
import Contacts from "./components/Contacts";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="about" element={<About />} />
      <Route path="contacts" element={<Contacts />} />
    </Routes>
  );
}

export default App;
