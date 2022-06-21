import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./Components/Pages/Home";
import Contact from "./Components/Pages/Contact";
import Company from "./Components/Pages/Company";
import NewProject from "./Components/Pages/NewProject";
import Projects from "./Components/Pages/Projects";
import Container from "./Components/Layout/Container";
import Navbar from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer"

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass="min_height">
        <Routes>        
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/NewProject" element={<NewProject />} />        
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
