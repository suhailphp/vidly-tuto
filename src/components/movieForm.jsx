import React from "react";

const MovieForm = (props) => {
  return (
    <div>
      <h1>Movie id is {props.match.params._id}</h1>

      <button
        onClick={() => props.history.replace("/movies")}
        className="btn btn-success"
      >
        Save
      </button>
    </div>
  );
};

export default MovieForm;
