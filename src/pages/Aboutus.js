import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Aboutus() {
  return (
    <div className="gradient-background">
      <div className="container">
        <header className="d-flex justify-content-center py-3">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/feat" className="nav-link ">
                Features
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/cont" className="nav-link ">
                Contact us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link active">
                About
              </Link>
            </li>
          </ul>
        </header>
      </div>
      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom">About</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <h3 className="fs-2 text-body-emphasis">About Me 🌟</h3>
            <p>
              I'm an individual driven by curiosity and fueled by passion. My
              journey is guided by a relentless pursuit of knowledge and a
              desire to make a positive impact. Let's embark on this adventure
              together! 🚀.
            </p>
          </div>
          <div className="feature col">
            <h3 className="fs-2 text-body-emphasis">🌟 My Mission 🌟</h3>
            <p>
              As a passionate learner and innovator, I strive to harness the
              power of technology 🚀 to solve real-world problems and spread
              positivity 🌍. Let's make a difference together! 💪
            </p>
          </div>
          <div className="feature col">
            <h3 className="fs-2 text-body-emphasis">🔮 My Vision 🔮</h3>
            <p>
              I envision a world where innovation thrives, communities flourish,
              and opportunities abound. Together, let's pave the path to a
              brighter future! 🌟
            </p>
          </div>
        </div>
      </div>

      <footer className="footer mt-5">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} TempPad</p>
        </div>
        <div className="text-center">
          <Link to="/" className="btn btn-primary mt-3">
            Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
}

export default Aboutus;
