import "./App.css";
import Portfolio from "./components/Portfolio.jsx";
import About from "./components/About.jsx";
import Resume from "./components/Resume.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Testimonials from "./components/testimonials.jsx";
import Contact from "./components/Contact.jsx";
import Blog from "./components/Blog.jsx";
import Home from "./components/home.jsx";
function App() {
  return (
    <div>
      <Sidebar />
      <main className="main">
        
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Blog />
        <Contact />
        
      </main>
    </div>
  );
}

export default App;
