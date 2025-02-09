import Data from "../Data";
import Card from "./Card";
import "../styles/resume.css";

const Resume = () => {
  return (
    <div>
      <section className="resume container section" id="resume" >
        <h2 className="section__title" >Experience</h2>
        <div className="resume__container grid" style={{color: "WHite"}}>
          <div className="timeline grid" style={{color: "WHite"}}>
            {Data.map((val, id) => {
              if (val.category === "education") {
                return (
                  <Card 
                    key={id} 
                    icon={val.icon} 
                    title={val.title} 
                    year={val.year} 
                    desc={val.desc} 
                  />
                );
              }
            })}
          </div>
          <div className="timeline grid" style={{color: "WHite"}}>
            {Data.map((val, index) => {
              if (val.category === "experience") {
                return (
                  <Card 
                    key={index} 
                    icon={val.icon} 
                    title={val.title} 
                    year={val.year} 
                    desc={val.desc} 
                  />
                );
              }
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
