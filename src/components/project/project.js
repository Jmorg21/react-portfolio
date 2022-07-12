import { useState } from 'react';

const Project = () => {  
    const [projects] = useState([
    {
      name: 'Weather Dashboard',
      repo: 'https://github.com/Jmorg21/weather-dashboard',
    }
    ]);

  return (
    <div>
      <div> 
        <h2>projects</h2>
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