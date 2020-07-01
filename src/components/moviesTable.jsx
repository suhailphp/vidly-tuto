import React, { Component } from "react";
import Like from "./common/like";

class MoviesTable extends Component {
  raiseSort = (column) => {
    let order =
      this.props.sortColumn.column === column &&
      this.props.sortColumn.order === "asc"
        ? "desc"
        : "asc";
    console.log(column, " ", order);
    this.props.onSort({ column, order }); //passing sortColumn object to Handle sort
  };

  render() {
    let { movies, onLike, onDelete } = this.props;
    return (
      <table className="table">
        <thead>
          <tr style={{ cursor: "pointer" }}>
            <th onClick={() => this.raiseSort("title")}>Title</th>
            <th onClick={() => this.raiseSort("genre.name")}>Genre</th>
            <th onClick={() => this.raiseSort("numberInStock")}>Stock</th>
            <th onClick={() => this.raiseSort("dailyRentalRate")}>Rate</th>
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
  }
}

export default MoviesTable;
