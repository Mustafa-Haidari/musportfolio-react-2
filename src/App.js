import React from "react";
import "./App.css";
import MyArt from "./Components/ArtWork/MyArt";
import Header from "./Components/Header/Header";
import Menu from "./Components/Header/Menu";
import Portfolio from "./Components/Portfolio/Portfolio";
import PortfolioData from "./PortfolioData";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Menu />
      <Portfolio items={PortfolioData} />
      <MyArt />
    </React.Fragment>
  );
}

export default App;
