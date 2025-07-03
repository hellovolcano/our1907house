import "@aws-amplify/ui-react/styles.css";
import './App.css'
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./pages/main";
import Guidebook from "./pages/guidebook";
import About from "./pages/about";
import Projects from "./pages/projects";
import History from "./pages/history";
import OutdoorSpace from "./pages/outdoor-space";

function App() {
  return (
    
    <div class="container">
      <Header />
      <div class="main-container">
        <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/guide-book" element={<Guidebook />} />
                <Route path="/history" element={<History />} />
                <Route path="/outdoor-space" element={<OutdoorSpace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;