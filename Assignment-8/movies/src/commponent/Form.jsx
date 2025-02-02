import React, { useState } from "react";
// import "./form.css";
import { useLocation, useNavigate } from "react-router-dom";

function Form() {
  const [btnclick, setBtnClick] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [randomNumber, setRandomNumber] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const { title, image } = location.state || {};
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mob: "",
  });
  const [inputValue, setInputValue] = useState({
    fullname: "",
    email: "",
    mob: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const newrandomNumber = Math.floor(1000000000 + Math.random() * 9000000000);
    setRandomNumber(newrandomNumber);

    if (
      inputValue.fullname != "" &&
      inputValue.email != "" &&
      inputValue.mob != ""
    ) {
      setFormData({
        fullname: inputValue.fullname,
        email: inputValue.email,
        mob: inputValue.mob,
      });
      setBtnClick(!btnclick);
      alert(`Congratulation Your ticket Number is ${newrandomNumber}`);
    } else alert("palese fill all details");

    setInputValue({
      fullname: "",
      email: "",
      mob: "",
    });
  };

  const showTicket = (e) => {
    e.preventDefault();
    setShowBtn(!showBtn);
    e.target.innerText = showBtn
      ? "SHOW TICKET"
      : "TAKE A PICTURE OF THIS OR SCREENSHOT";
  };

  console.log(formData);

  return (
    <>
      {!btnclick && (
        <div
          className="card container p-3 text-start mb-2 d-flex "
          style={{ width: "22rem", height: "20rem" }}
        >
          <h3 className="m-auto">Fill All Details</h3>
          <form
            onSubmit={handleSubmit}
            className="d-flex flex-column justify-content-center"
          >
            <div className="mb-3 mt-2 d-flex flex-row justify-content-between">
              <label htmlFor="fullname" className="form-label">
                Full Name:
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={inputValue.fullname}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3 mt-2 d-flex flex-row justify-content-between ">
              <label htmlFor="email" className="form-label">
                Email address:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={inputValue.email}
                aria-describedby="emailHelp"
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3 mt-2 d-flex flex-row justify-content-between">
              <label htmlFor="mob" className="form-label">
                Mobile no :
              </label>
              <input
                type="tel"
                id="mob"
                name="mob"
                maxLength="10"
                value={inputValue.mob}
                onChange={handleInputChange}
              />
            </div>
            <div className="d-flex justify-content-around">
              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: "7rem" }}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}

      {btnclick && (
        <button type="text" className="btn btn-success" onClick={showTicket}>
          SHOW TICKET
        </button>
      )}

      {/* ticket confrom */}

      {showBtn && (
        <div
          className="card mb-3 mt-3"
          style={{ width: "30rem", height: "15rem:" }}
          id="ticket"
        >
          <div className="row g-0">
            <div className="col-md-4 p-2 rounded">
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
                  {formData.fullname}
                </p>
                <p>
                  <span className="fw-bold">Email : </span>
                  {formData.email}
                </p>
                <p>
                  <span className="fw-bold">MOB : </span>
                  {formData.mob}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <button
        type="back"
        className="btn btn-danger ms-2"
        style={{ width: "10rem" }}
        onClick={() => {
          navigate("/");
        }}
      >
        Go back to Home
      </button>
    </>
  );
}

export default Form;
