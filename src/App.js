import React, { useState } from "react";
import PropTypes from "prop-types";
import Aboutus from "./Aboutus";
import Textform from "./Textform";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App(props) {
  const [darkMode, setDarkMode] = useState(false);
  const [allert, setAllert] = useState(false);

  const toggleDarkMode = () => {
    document.body.style.backgroundColor = darkMode ? "white" : "#1b2733";
    setDarkMode(!darkMode);
    document.title = "Light";
    if (!darkMode) {
      document.title = "Dark";
      setAllert(true);
      setTimeout(() => {
        setAllert(false);
      }, 1000);
    }
  };

  const myStyle = {
    color: darkMode ? "white" : "black",
    backgroundColor: darkMode ? "#1b2733" : "white",
  };

  return (
    <Router>
      <nav
        className={`navbar bg-${
          darkMode ? "dark" : "light"
        } border-bottom border-body`}
        // this is the same as terminal subsitution by using `` and $
        data-bs-theme={darkMode ? "dark" : "light"}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.navbarTitle}
          </Link>
          <Link className="nav-link active" to="/aboutus">
            About Us
          </Link>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              checked={darkMode}
              onChange={toggleDarkMode}
            />
            <label htmlFor="flexSwitchCheckDefault" style={myStyle}>
              Dark mode
            </label>
          </div>
        </div>
      </nav>

      <div>
        {allert && (
          <div
            className="alert alert-success d-flex align-items-center"
            role="alert"
          >
            Dark mode enabled
          </div>
        )}
      </div>
      {/*  */}
      <Routes>
        {/* Newer version element = not a component in the tag  */}
        <Route path="/" element={<Textform myStyle={myStyle} />} />
        <Route path="/aboutus" element={<Aboutus myStyle={myStyle} />} />
      </Routes>
    </Router>
  );
}

// Specifies the default values for props:
App.defaultProps = {
  navbarTitle: "Stranger",
};

// to keep a track and to recieve proper props from JS
// when you put is required then the console will log the error if the props is not passed
App.propTypes = { navbarTitle: PropTypes.string.isRequired };

export default App;
