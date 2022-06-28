import React from 'react';
import '../App.css';
import { Link, Route, Routes } from "react-router-dom";

function Home() {
    return (
        <div className="Main">
        <h1 className="Title">Rebekah Felker</h1>
        <p>I’m a problem-solver who loves collaboration and developing strategies to take ideas from discovery through delivery. </p>
        <Link to="/about">Past Projects</Link>
      </div>
    )
}

export default Home;