import React from "react";
import DescriptionPhoto from "../../../images/BACK2.JPG";
import Holiness from "../../../images/Holiness.png";
import Love from "../../../images/love2.jpg";
import Equilibrium from "../../../images/Equilibre.JPG";
import "./Home.css";
import bgConstruction from "../../../images/Constrution.jpg";
import pastor1 from "../../../images/Pastor2Ebenezer.JPG";
import preaching from "../../../images/preaching.JPG";
import preaching2 from "../../../images/Children.JPG";
import churchInside from "../../../images/churchInside.jpg";
import BibleStudy from "../../../images/biblestudy.jpg";
import YouthCenter from "../../../images/preaching2.JPG";
import Delivrace from "../../../images/Delivrace.jpg";

export function Description() {
  return (
    <section className="container1" id="container1">
      <img src={DescriptionPhoto} alt="loading..." />
      <div className="section1">
        <h1 className="Description">Ebenezer Cross Church</h1> <br />
        <div className="section11">
          <h4>~HOLINESS </h4>
          <h4>~LOVE </h4>
          <h4>~EQUILIBRIUM </h4>
        </div>
      </div>
    </section>
  );
}
export function About() {
  return (
    <section className="About" id="About">
      <h1>ABOUT</h1>
      <br />
      <p>
        Ebenezer Cross Church was founded in 1992 as Zaïrian Church. Refugees
        who came from DRCongo, created the church for praising God. The church
        has tree extensions in Kakuma camp and Kalobei settlement.
      </p>
      <button type="button" className="btn btn-warning">
        For More
      </button>
    </section>
  );
}
export function OurValue() {
  return (
    <section className="container" id="Value">
      <h1>OUR VALUES</h1>
      <div className="container-lg">
        <p className="Holiness">
          <img src={Holiness} className="container-fluid" />
          HOLINESS
        </p>
        <p className="Love">
          <img src={Love} className="container-fluid" />
          LOVE
        </p>
        <p className="Equilibrium">
          <img src={Equilibrium} className="container-fluid" />
          EQUILIBRIUM
        </p>
      </div>
    </section>
  );
}
export function Construction() {
  return (
    <section className="container4">
      <img src={bgConstruction} alt="loading..." className="imgConstrution" />
      <div className="container-Ction">
        <h1>Ebenezer Cross Church Construction</h1> <br />
        <p>
          This project consists in building the main church of Ebenezer Cross
          Church, in Kakuma Camp, a temple for the glory of our God. We want to
          build this temple with you, to give a great awakening to all mankind.
          We want to build this temple according to the vision that God has
          given us and by associating you with its construction, so that this
          blessing is distributed to all of God's children.
        </p>
        <button>Discover</button>
      </div>
    </section>
  );
}

export function Biography() {
  return (
    <section id="BioJeremie">
      <div className="JeremieBio">
        <h1>Pastor Jeremie BISIMWA</h1>
        <p>
          He was baptized in 1988 and then in 2010 he received the word of God.
          His wife is Salim Nyandinda Jeremie and he is the father of 5 children{" "}
        </p>
        <button className="Bio">Biography</button>
      </div>

      <img src={pastor1} alt="loading..." />
    </section>
  );
}
export function Program() {
  return (
    <div className="container" id="program1">
      <h1>OUR PROGRAMS</h1>
      <div>
        <div id="program">
          <div>
            <h1>Sunday</h1>
            <img src={preaching} alt="Loading..."  />
            <p> 8:45' a.m. to 12:30' a.m.</p>
          </div>
          <div>
            <h1>Sunday School</h1>
        
            <img src={preaching2} alt="Loading..." id="imgProgram1" />
            <p>7:00' a.m. to 8h:30' a.m.</p>
          </div>
        </div>
        <div id="program">
          <div>
            <h1>Monday</h1>
            <img src={churchInside} alt="Loading..." id="imgProgram1" />
            <p>Devotion, 4:45' p.m. to 6:30' p.m.</p>
          </div>
          <div>
            <h1>Wednesday</h1>
            <img src={BibleStudy} alt="Loading..." id="imgProgram1" />
            <p>Bible study, 4:00' p.m. to 6:30' p.m.</p>
          </div>
        </div>
        <div id="program">
          <div>
            <h1> Friday</h1>
            <img src={YouthCenter} alt="Loading..." id="imgProgram1" />
            <p> Youth center 4:00' p.m. to 6:00' p.m.</p>
          </div>
          <div>
            <h1>Saturday</h1>
            <img src={Delivrace} alt="Loading..." id="imgProgram1" />
            <p>Deliverance, 9:00' a.m. to 12:00' a.m.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
