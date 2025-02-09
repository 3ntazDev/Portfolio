import "../styles/about.css";
const About = () => {
  return (
    <section className="about container section" id="about"> 
    
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
  <img src={Image} alt="" className="about__img" />
  <div className="about__data grid">
    <div className="about__info">
     
      <p className="about__description" style={{ color: "white" }}>
        I am Bolby Doe, web developer from London, United Kingdom. I have
        rich experience in web site design and building and customization,
        also I am good at WordPress.
      </p>
      <a href="" className="btn" style={{ color: "black", backgroundColor: "white" }}>
        Download CV
      </a>
    </div>
    <div className="about__skills grid">
      <div className="skills__data">
        <div className="skills__titles">
          <h3 className="skills__name" style={{ color: "white" }}></h3>
          <span className="skills__number" style={{ color: "white" }}></span>
        </div>
        
      </div>
      <div className="skills__data">
        <div className="skills__titles">
          <h3 className="skills__name" style={{ color: "white" }}>
            Development
          </h3>
          <span className="skills__number" style={{ color: "white" }}>
            70%
          </span>
        </div>
        <div className="skills__bar">
          <span className="skills__percentage development"></span>
        </div>
      </div>
      <div className="skills__data">
        <div className="skills__titles">
          <h3 className="skills__name" style={{ color: "white" }}>
            UI/UX
          </h3>
          <span className="skills__number" style={{ color: "white" }}>
            90%
          </span>
        </div>
        <div className="skills__bar">
          <span className="skills__percentage ui__design"></span>
        </div>
      </div>
      <div className="skills__data">
        <div className="skills__titles">
          <h3 className="skills__name" style={{ color: "white" }}>
            Testing
          </h3>
          <span className="skills__number" style={{ color: "white" }}>
            80%
          </span>
        </div>
        <div className="skills__bar">
          <span className="skills__percentage Testing"></span>
        </div>
      </div>
    </div>
  </div>
</div>
    </section>
  );
};

export default About;
