import React from "react";
import { Link } from "react-router-dom";

function Features() {
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
              <Link to="/feat" className="nav-link active">
                Features
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/cont" className="nav-link">
                Contact us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
          </ul>
        </header>
      </div>
      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom">Our TempPad Features</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <h3 className="fs-2 text-body-emphasis">
              🔒 No More Logins, Only Temp Share! 📁
            </h3>
            <p>
              Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words.
            </p>
          </div>
          <div className="feature col">
            <h3 className="fs-2 text-body-emphasis">
              🔄 Transfer Anytime, Anywhere!
            </h3>
            <p>
              Experience the convenience of round-the-clock file transfer with
              our platform. Whether it's day or night, weekday or weekend, our
              service is always available to meet your sharing needs. Say
              goodbye to waiting and hello to instant sharing at your
              fingertips! 🌟
            </p>
          </div>
          <div className="feature col">
            <h3 className="fs-2 text-body-emphasis">📁 Easy to use</h3>
            <p>
              Share Files Effortlessly! Step into a world where file sharing is
              as easy as a click. Our platform offers you a seamless way to
              share documents, photos, and more with just a few simple steps. No
              more hassle, no more complications – just smooth sailing from
              start to finish. Try it now and see how easy sharing can be!
            </p>
          </div>
        </div>
      </div>
      <footer className="footer mt-5">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} TempPad</p>
          <button
            className="btn btn-secondary"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to Top
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Features;
