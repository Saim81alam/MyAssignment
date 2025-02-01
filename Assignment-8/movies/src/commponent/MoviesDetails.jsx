import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function MoviesDetails() {
  const navigate = useNavigate();
  const location = useLocation();
  const { id, title, image, details } = location.state || {};
  return (
    <div className="card p-3" style={{ width: "18rem" }} key={id}>
      <div
        className="rounded"
        style={{
          height: "8rem",
          width: "auto",
          background: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{details}</p>
        <button
          onClick={() => {
            navigate("/form", { state: { image: image, title: title } });
          }}
          className="btn btn-primary"
        >
          BOOK YOUR SEAT
        </button>
        <br />
        <button
          onClick={() => {
            navigate("/");
          }}
          className="btn btn-danger mt-2"
        >
          BACK TO HOME
        </button>
      </div>
    </div>
  );
}

export default MoviesDetails;
