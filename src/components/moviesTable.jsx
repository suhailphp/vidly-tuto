import React, { Component } from "react";
import Like from "./common/like";

class MoviesTable extends Component {
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Genre</th>
            <th>Stock</th>
            <th>Rate</th>
            <th>Fav</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {this.props.movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like
                  liked={movie.liked}
                  onClick={() => this.props.onLike(movie)}
                />
              </td>
              <td>
                <button
                  onClick={() => this.props.onDelete(movie._id)}
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
  }
}

export default MoviesTable;
