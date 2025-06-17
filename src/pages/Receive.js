import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "./firebase";
import QRCode from "qrcode.react";
import video from "../assets/Fileshare.mp4";

function generateCode() {
  return Math.floor(Math.random() * 100000000) + 10000000;
}

function Receive() {
  const imagesListRef = ref(storage, "images/");

  const [generatedCode, setGeneratedCode] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [details, setDetails] = useState({ code: "", url: "" });
  const [qrCodeUrl, setQrCodeUrl] = useState("");
  const [loading, setLoading] = useState(false); // State to track loading status
  const [uploadSuccess, setUploadSuccess] = useState(false); // State to track upload success

  const uploadFile = () => {
    if (imageUpload === null) return;

    setLoading(true); // Set loading to true while uploading

    const code = generateCode();
    setGeneratedCode(code);

    const imageRef = ref(storage, `images/${code}-${imageUpload.name}`);
    uploadBytes(imageRef, imageUpload)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setImageUrls((prev) => [...prev, url]);
          setDetails({ code, url });
          setLoading(false); // Set loading to false after successful upload
          setUploadSuccess(true); // Set upload success to true
        });
      })
      .catch((error) => {
        console.error("Error uploading file:", error);
        setLoading(false); // Set loading to false if there's an error
      });
  };

  const PostData = async () => {
    try {
      const res = await fetch(
        "https://inbound-fulcrum-396809-default-rtdb.firebaseio.com/amitform.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(details),
        },
      );
      if (res.ok) {
        console.log("Data successfully written to Firebase Realtime Database");
        setQrCodeUrl(details.url);
      } else {
        console.error(
          "Error writing data to Firebase Realtime Database:",
          res.statusText,
        );
      }
    } catch (error) {
      console.error("Error during fetch request:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await listAll(imagesListRef);
      const urls = await Promise.all(
        response.items.map((item) => getDownloadURL(item)),
      );
      setImageUrls(urls);
    };
    fetchData();
  }, [imageUpload, imagesListRef]);

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
              <Link to="/Contactus" className="nav-link">
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
              Simple, Upload And Send it!
            </h1>
            <p className="lead">
              Quickly upload an image, generate a code, and send it. Use the
              generated code to access the image later.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start"></div>
          </div>
        </div>
        <div className="container my-6">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="mb-3">
                <input
                  type="file"
                  className="form-control"
                  onChange={(event) => {
                    setImageUpload(event.target.files[0]);
                  }}
                />
              </div>
              <button
                id="send"
                className="btn mb-3"
                onClick={uploadFile}
                disabled={loading} // Disable the button while loading
              >
                Upload
              </button>
              <button
                id="receive"
                className="btn btn-success mb-3"
                onClick={PostData}
                disabled={loading} // Disable the button while loading
              >
                Send
              </button>
              {loading && <div className="loading-indicator">Uploading...</div>}
              {uploadSuccess && (
                <div className="success-message">
                  Successfully uploaded Click The Send Button!
                </div>
              )}
              {generatedCode && (
                <input
                  type="text"
                  className="form-control mb-3"
                  value={generatedCode}
                  readOnly
                />
              )}
              {qrCodeUrl && (
                <div className="mb-3">
                  <QRCode value={qrCodeUrl} />
                </div>
              )}
            </div>
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

export default Receive;
