import Nav from "../Navigation/nav";

function Header({ name }) {
  return (
    <div className="App">
      <header className="App-header">

        <h1> {name}</h1>

        <Nav/>
      </header>
    </div>
  );
}

export default Header;