import React from "react";
import { useNavigate } from "react-router-dom";

function MoviesPage({ MoviesList }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="row row-cols-1 row-cols-md-4 g-4"
        style={{ width: "90vw" }}
      >
        {MoviesList.map((movie) => (
          <div className="col">
            <div className="card h-100 p-3">
              <div
                className="rounded"
                style={{
                  height: "8rem",
                  background: `url(${movie.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* <img src={movie.image} class="card-img"></img> */}
              </div>
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <button
                  onClick={() => {
                    navigate("/next", { state: movie });
                  }}
                  className="btn btn-primary"
                >
                  Show Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default MoviesPage;
