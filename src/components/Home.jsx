import Header from "./Header";
import ScorllDown from "./ScorllDown";
import "../styles/home.css";
import Shapes from "./Shapes";
import Logo from "../assets/react-js.png";
import Logo2 from "../assets/tailwind-css.png";
const Home = () => {
  return (
    <section className="home container" id="Home">
      <Shapes />
      <div className="intro">
      <div className="flex flex-col items-center justify-center">
  {/* الأيقونات بجانب بعض */}
  <div className="flex space-x-2 mb-2">
    <img
      src={Logo}
      alt="Logo"
      className="w-[50px] h-[50px] animate-bounce"
    />
    <img
      src={Logo2}
      alt="Logo2"
      className="w-[50px] h-[50px] animate-bounce"
    />
  </div>

  
 
</div>
        <h1 className="home__name">Fahad Alghamdi</h1>
        <span className="home__eduction">Software Engineer</span>
        <Header />
        <a href="" className="btn" style={{ color: "white" }}>
          Hire Me
        </a>
        <ScorllDown />
      </div>
    </section>
  );
};

export default Home;
