import React from 'react';
import headshot from "../../assets/images/headshot.jpg"

function About() {

  return (
    <section className="my-3 about" >
      <h2 id="about">About me</h2>
      <img src={headshot} alt="Jimmy outside with coffee"></img>
        <p>
            Hello, my name is Jimmy Morgan.
            <br></br>
            I am a web developer with a certificate in Full-Stack Web Development from The Ohio State University. I excel in leadership skills as well as attention to detail, and take extreme pride in the quality and accuracy of my work. I like to seek out new challenges, and am always looking to expand my skill-set and solve new problems.
        </p>
    </section>
  )
}
export default About