import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import img1 from "./assets/image1.png";
import img2 from "./assets/image2.png";
import img3 from "./assets/image3.png";
import img4 from "./assets/image4.png";
import img5 from "./assets/image5.png";
import img6 from "./assets/image6.png";
import profile from "./assets/img.jpeg";

function App() {
  return (
    <div>
      <div className="gradient-background">
        <div className="container">
          <header className="d-flex justify-content-center py-3">
            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/feat" className="nav-link">
                  Features
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/cont" className="nav-link">
                  Contact Us
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

        <div className="container my-5">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
                Temp-Pad
              </h1>
              <p className="lead">
                Welcome to TempPad – your hassle-free file sharing solution! Say
                goodbye to logins and hello to instant sharing. Just upload,
                generate your unique code and QR, and share away! It's that
                simple. Try TempPad now and streamline your file sharing
                experience!
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <Link
                  id="receive"
                  to="/Receive"
                  className="btn btn-success btn-lg px-4 me-md-2 fw-bold"
                  style={{ display: "inline-block" }}
                >
                  Send
                </Link>
                <Link
                  id="send"
                  to="/Send"
                  className="btn btn-outline-primary btn-lg px-4"
                  style={{ display: "inline-block" }}
                >
                  receive
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="marquee">
        <div className="title">
          <h1>Transfer-24/7</h1>
        </div>
        <Marquee speed={170}>
          <div className="image_wrapper">
            <img src={img1} alt="image_wrapper"></img>
          </div>
          <div className="image_wrapper">
            <img src={img2} alt=""></img>
          </div>
          <div className="image_wrapper">
            <img src={img4} alt=""></img>
          </div>
          <div className="image_wrapper">
            <img src={img5} alt=""></img>
          </div>
          <div className="image_wrapper">
            <img src={img6} alt=""></img>
          </div>
          <div className="image_wrapper">
            <img src={img3} alt=""></img>
          </div>
        </Marquee>
      </div>

      {/* Testimonials */}
      <div className="my-5">
        <div className="p-5 text-center bg-body-tertiary">
          <div className="container py-5">
            <h2 className="text-body-emphasis">
              "TempPad has revolutionized the way I share files! No more hassle
              with complicated platforms. It's simple, efficient, and just what
              I needed."
            </h2>
            <img
              className="profile-img mt-5"
              src={profile}
              alt="User Profile"
            />
            <p className="col-lg-8 mx-auto lead mt-2">
              Prakash Gandham, Founder of TempPad
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
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

export default App;
