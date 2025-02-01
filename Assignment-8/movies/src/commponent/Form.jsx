import React, { useState } from "react";
// import "./form.css";
import { useLocation, useNavigate } from "react-router-dom";

function Form() {
  const [btnclick, setBtnClick] = useState(false);
  const [randomNumber, setRandomNumber] = useState();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mob, setMob] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { title, image } = location.state || {};

  function handleClick() {
    setRandomNumber(Math.floor(1000000000 + Math.random() * 9000000000));
    if (fullName == "" || email == "" || mob == "") {
      alert("palese fill all details");
    } else {
      setBtnClick(!btnclick);
    }
  }
  return (
    <>
      <div
        className="card container p-3 text-start mb-2"
        style={{ width: "22rem", height: "20rem" }}
      >
        <h3 className="m-auto">Fill All Details</h3>
        <div className="mb-3 mt-2 d-flex flex-row justify-content-between">
          <label htmlFor="userName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            id="userName"
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="mb-3 mt-2 d-flex flex-row justify-content-between">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3 mt-2 d-flex flex-row justify-content-between">
          <label htmlFor="mob" className="form-label">
            Mobile no :
          </label>
          <input type="tel" id="mob" onChange={(e) => setMob(e.target.value)} />
        </div>
        <button
          type="submit"
          className="btn btn-primary m-auto mt-2"
          style={{ width: "7rem" }}
          onClick={handleClick}
        >
          Submit
        </button>
      </div>

      {/* ticket confrom */}

      {btnclick && (
        <div
          className="card mb-3"
          style={{ width: "30rem", height: "15rem:" }}
          id="ticket"
        >
          <div className="row g-0">
            <div className="col-md-4 p-2 rounded">
              {/* <img src={image} className="img-fluid rounded-start" alt="..." /> */}
              <div
                className="mt-4 mb-2"
                style={{
                  height: "8rem",
                  width: "auto",
                  background: `url(${image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <h5 className="card-title">{title}</h5>
            </div>
            <div className="col-md-8 p-3">
              <div className="card-body text-start">
                <p>
                  <span className="fw-bold">TICKET NO :</span>
                  {randomNumber}
                </p>
                <p>
                  <span className="fw-bold">FULL Name : </span>
                  {fullName}
                </p>
                <p>
                  <span className="fw-bold">Email : </span>
                  {email}
                </p>
                <p>
                  <span className="fw-bold">MOB : </span>
                  {mob}
                </p>
              </div>
              <button
                type="back"
                className="btn btn-danger m-auto mb-1"
                style={{ width: "10rem" }}
                onClick={() => {
                  navigate("/");
                }}
              >
                Go back to Home
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Form;
