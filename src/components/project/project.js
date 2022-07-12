import { useState } from 'react';

import weatherDashboard from "../../assets/images/weather-dashboard.png";
import dogAdoptionFinder from "../../assets/images/dogAdoptionFinder.png";
import codeQuiz from "../../assets/images/codeQuiz.png";
import passGen from "../../assets/images/passGen.png";
import scheduler from "../../assets/images/scheduler.png";
import i from "../../assets/images/i.png"

const Project = () => {  
    const [projects] = useState([
    {
      name: 'Weather Dashboard',
      image: weatherDashboard,
      repo: 'https://github.com/Jmorg21/weather-dashboard',
      deployed: 'https://jmorg21.github.io/weather-dashboard/',
      description: 'A website that allows the user to check the current weather, as well as a 5-day forecast, for the city of their choice.'
    },
    {
      name: 'Dog Adoption Finder',
      image: dogAdoptionFinder,
      repo: 'https://github.com/Jmorg21/dogAdoptionFinder',
      deployed: 'https://awgarner.github.io/dogAdoptionFinder/',
      description: 'A responsive app utilizing an api to help users find adoptable dogs at their local shelters',
    },
    {
      name: 'Code Quiz',
      image: codeQuiz,
      repo: 'https://github.com/Jmorg21/code-quiz',
      deployed: 'https://jmorg21.github.io/code-quiz/',
      description: 'Interactive quiz related to coding with a scoreboard feature.',
    },
    {
    name: 'Password Generator',
    image: passGen,
    repo: 'https://github.com/Jmorg21/password-generator',
    deployed: 'https://jmorg21.github.io/password-generator/',
    description: 'This page will automatically generate a password using user-inputted prompts regarding special characters, numbers, case of the text, and number of characters. Once all prompts have been answered with a valid choice, the password will be generated onto the page',
    },
    {
    name: 'Work Day Scheduler',
    image: scheduler,
    repo: 'https://github.com/Jmorg21/work-day-scheduler',
    deployed: 'https://jmorg21.github.io/work-day-scheduler/',
    description: 'Work Day Scheduler is a single day planner that allows the user to create and save a daily agenda using local storage. This application uses color coding to show the past (grey), present (red), and future (green) time slots for more effective planning.',
    },
    {
      name: 'i++',
      image: i,
      repo: 'https://github.com/Jmorg21/I-',
      deployed: 'https://peaceful-beach-75980.herokuapp.com/',
      description: 'i ++ is an open dating site, available to you no matter who you are or what defines you. Our online dating site intermixes the best of social media with the thrill of possibly finding what you are seeking. Whether that be a companion, life-long patner, spouse, hookup, or just a good time for a little time; i ++ has exactly what you are looking for.',
    },
    ]);

  return (
    <div>
      <div> 
        <h2>My Projects</h2>
      </div>
      <div className='projectContainer my-3'>
        {projects.map((project, key)=> (
          <div key={key} className="project card">
            <div className='card-body'>
              <a href={project.deployed}>
                <img
                  class="card-img-top"
                  src={project.image}
                  alt={project.name}
                />
              </a>
              <h3 className='card-title'>{project.name}</h3>
              <p className='card-text'>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;