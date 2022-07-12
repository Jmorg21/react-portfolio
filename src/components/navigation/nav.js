import React from 'react';

function Nav(props) {
  const {setPage} = props
  return (
    <nav>
      <li onClick={() => setPage("about")}>about</li>
      <li onClick={() => setPage("projects")}>projects</li>
      <li onClick={() => setPage("resume")}>resume</li>
      <li onClick={() => setPage("contact")}>contact</li>
    </nav>
  );
}

export default Nav;