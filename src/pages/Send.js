import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import video from "../assets/Fileshare.mp4";

function Send() {
  const [retrievedData, setRetrievedData] = useState(null);
  const [inputCode, setInputCode] = useState("");
  const [correspondingUrl, setCorrespondingUrl] = useState("");
  const [error, setError] = useState(null);

  // Function to fetch data from Firebase
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://inbound-fulcrum-396809-default-rtdb.firebaseio.com/amitform.json",
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      console.log("Retrieved data:", data); // Log retrieved data
      setRetrievedData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []); // Run only once on component mount

  // Handle input code change
  const handleCodeChange = (e) => {
    setInputCode(e.target.value);
  };

  // Find URL corresponding to the input code
  const findUrlForCode = () => {
    console.log("Input code:", inputCode); // Log input code
    if (retrievedData && inputCode.trim() !== "") {
      const codeToFind = inputCode.trim();
      const dataKeys = Object.keys(retrievedData);
      console.log("Data keys:", dataKeys); // Log data keys
      const foundKey = dataKeys.find((key) => {
        console.log("Code in data for key", key, ":", retrievedData[key].code); // Log code for each key
        return String(retrievedData[key].code) === codeToFind;
      });
      console.log("Found key:", foundKey); // Log found key
      if (foundKey) {
        const url = retrievedData[foundKey].url;
        console.log("Corresponding URL:", url); // Log corresponding URL
        setCorrespondingUrl(url);
      } else {
        alert("Invalid code.");
      }
    } else {
      alert("Please enter a valid code.");
    }
  };

  // Copy URL to clipboard
  const copyUrlToClipboard = () => {
    if (correspondingUrl) {
      const textField = document.createElement("textarea");
      textField.innerText = correspondingUrl;
      document.body.appendChild(textField);
      textField.select();
      document.execCommand("copy");
      textField.remove();
      alert("URL copied to clipboard!");
    } else {
      alert("No URL to copy.");
    }
  };

  return (
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
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <video
              autoPlay
              loop
              muted
              className="mt-3"
              style={{ maxWidth: "100%", maxHeight: "auto" }}
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Simple, Enter code And Copy it!
            </h1>
            <p className="lead">
              Enter the code below, click copy url Button, and paste it wherever
              you need. It's that simple!
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <input
              type="text"
              value={inputCode}
              onChange={handleCodeChange}
              className="form-control mb-2"
              placeholder="Enter code"
            />
            <button
              id="send"
              onClick={findUrlForCode}
              className="btn btn-primary mb-2"
            >
              Find
            </button>
            <button
              id="receive"
              onClick={copyUrlToClipboard}
              className="btn btn-secondary mb-2"
            >
              Copy URL
            </button>
            {correspondingUrl && (
              <div className="mt-3">
                <strong>Corresponding URL:</strong> {correspondingUrl}
              </div>
            )}
            {error && (
              <div className="alert alert-danger mt-3" role="alert">
                Error: {error}
              </div>
            )}
          </div>
        </div>
      </div>
      <footer className="footer mt-5">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} TempPad</p>
          <button className="btn btn-secondary">
            <Link to="/" className="nav-link">
              Back
            </Link>
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Send;
