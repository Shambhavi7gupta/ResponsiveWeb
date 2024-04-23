import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <>
      <div>
        <header className="container">
          <div className="logo-container">
            <img className="logoImg" src="./Images/logo.png" alt="logo" />
            <h2>Reviews</h2>
          </div>
          <nav className="navbar">
            <ul>
              <li>
                <a class="active" href="/">
                  Solution
                </a>
              </li>
              <li>
                <a href="/">Features</a>
              </li>
              <li>Pricing</li>
              <li>Sign in</li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
