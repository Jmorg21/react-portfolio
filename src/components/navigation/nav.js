import React from 'react'

function Nav(props) {
    const {setPage} = props
    return (
      <nav>
        <li onClick={() => setPage("about")}>About</li>
        <li onClick={() => setPage("projects")}>Projects</li>
        <li onClick={() => setPage("contact")}>Contact</li>
      </nav>
    );
}

export default Nav;