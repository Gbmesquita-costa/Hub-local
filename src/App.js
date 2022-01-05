import React from "react"
import Logo from "./templates/logo"
import Nav from "./templates/nav"
import Main from "./templates/main"
import Footer from "./templates/footer"
import Rodapé from "./templates/rodapé"
import './css/App.css';

function App() {
  return (
    <div className="app">
        <Logo/>
        <Nav/>
        <Main/>
        <Footer/>
        <Rodapé/>
    </div>
  );
}

export default App;
