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

import Container from "./Components/Layout/Container";

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Company">Company</Link>
        <Link to="/NewProject">NewProject</Link>
      </div>
      <Container customClass="min_height">
        <Routes>        
          <Route path="/" element={<Home />} />
          <Route path="/Company" element={<Company />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/NewProject" element={<NewProject />} />        
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;
