import Header from "./Header"
import ScorllDown from "./ScorllDown"
import "../styles/home.css"
import Shapes from "./Shapes"
const Home = () => {
  return (

<section className="home container" id="Home">

<Shapes/>
<div className="intro">
  <img src="" alt="" />
  
  <h1 className="home__name">Fahad Alghamdi</h1>
<span className="home__eduction">Software Enginner</span>
<Header/>
<a href="" className="btn" style={{ color: "white" }}>Hire Me</a>
<ScorllDown/> 
</div>






</section>


  )
}

export default Home