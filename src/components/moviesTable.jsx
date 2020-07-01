import React from "react";
import Like from "./common/like";

const MoviesTable = ({ movies, onLike, onDelete, onSort }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => onSort("Title")}>Title</th>
          <th onClick={() => onSort("Genre")}>Genre</th>
          <th onClick={() => onSort("Stock")}>Stock</th>
          <th onClick={() => onSort("Rate")}>Rate</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {movies.map((movie) => (
          <tr key={movie._id}>
            <td>{movie.title}</td>
            <td>{movie.genre.name}</td>
            <td>{movie.numberInStock}</td>
            <td>{movie.dailyRentalRate}</td>
            <td>
              <Like liked={movie.liked} onClick={() => onLike(movie)} />
            </td>
            <td>
              <button
                onClick={() => onDelete(movie._id)}
                className="btn btn-danger btn-small"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
