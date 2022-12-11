import React from "react";
import { Link } from "react-router-dom";
import "./Intro.css";

const Intro = () => {
  return (
    <>
      <h1 className="title mt-5">Lottery DApp</h1>
      <ul className="list-group" id="list">
        <div className="center">
          <li className="list-group-item" aria-disabled="true">
            <h1>Who Are You?</h1>
          </li>
          <li className="list-group-item">
            <Link to="/manager" className="text-decoration-none text">
              <button className="btn btn-primary button1">Organizer</button>
            </Link>
            <Link to="/players" className="text-decoration-none text">
              <button className="btn btn-primary button1 player">Player</button>
            </Link>
          </li>
        </div>
      </ul>
    </>
  );
};
export default Intro;