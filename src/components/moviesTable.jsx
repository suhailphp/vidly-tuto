import React, { Component } from "react";
import Like from "./common/like";
import Table from "./common/table";

class MoviesTable extends Component {
  render() {
    let { movies, sortColumn, onSort } = this.props;
    let columns = [
      { label: "Title", path: "title" },
      { label: "Genre", path: "genre.name" },
      { label: "Stock", path: "numberInStock" },
      { label: "Rate", path: "dailyRentalRate" },
      {
        key: "like",
        content: (movie) => (
          <Like liked={movie.liked} onClick={() => this.props.onLike(movie)} />
        ),
      },
      {
        key: "delete",
        content: (movie) => (
          <button
            onClick={() => this.props.onDelete(movie._id)}
            className="btn btn-danger btn-small"
          >
            Delete
          </button>
        ),
      },
    ];
    return (
      <Table
        onSort={onSort}
        data={movies}
        sortColumn={sortColumn}
        columns={columns}
      />
    );
  }
}

export default MoviesTable;
