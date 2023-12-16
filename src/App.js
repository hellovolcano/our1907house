import "@aws-amplify/ui-react/styles.css";
import './App.css'
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";
import Main from "./pages/main";
import Blog from "./pages/blog";
import About from "./pages/about";
import HowTo from "./pages/how-to";

function App() {
  return (
    
    <div class="container">
      <Header />
      <div class="main-container">
        <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/how-to" element={<HowTo />} />
                <Route path="/posts" element={<Blog />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;