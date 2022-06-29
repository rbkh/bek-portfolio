import React from 'react';
import './styles.css';
import { Link } from "react-router-dom";

function Home() {
    return (
      <div className="MainContainer">
        <h1 className="Title">Rebekah Felker</h1>
        <p className="SubTitle">I’m a problem-solver who loves collaboration and developing strategies<br /> to take ideas from discovery through delivery. </p>
        <a href="mailto:rebekahfelker@gmail.com" >send me an email</a>
      </div>
    )
}

export default Home;