import { useState } from 'react';
import './App.css';
import Footer from "./components/footer/footer";
//import About from "./components/about/about"
//import Contact from "./components/contact/contact"
import Nav from "./components/navigation/nav";
//import Project from "./components/project/project";
import MainContainer from "./components/page/main";

function App() {
  const [page, setPage] = useState("about");
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jimmy Morgan</h1>
        <Nav setPage={setPage} />
      </header>
      <MainContainer page={page} />
      <Footer />
    </div>
  );
}

export default App;