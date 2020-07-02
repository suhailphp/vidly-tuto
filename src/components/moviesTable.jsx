import React, { Component } from "react";
import Like from "./common/like";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";

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
      <table className="table">
        <TableHeader
          onSort={onSort}
          columns={columns}
          sortColumn={sortColumn}
        />
        <TableBody data={movies} columns={columns} />
      </table>
    );
  }
}

export default MoviesTable;

// {movies.map((movie) => (
//     <tr key={movie._id}>
//       <td>{movie.title}</td>
//       <td>{movie.genre.name}</td>
//       <td>{movie.numberInStock}</td>
//       <td>{movie.dailyRentalRate}</td>
//       <td>
//         <Like liked={movie.liked} onClick={() => onLike(movie)} />
//       </td>
//       <td>
//         <button
//           onClick={() => onDelete(movie._id)}
//           className="btn btn-danger btn-small"
//         >
//           Delete
//         </button>
//       </td>
//     </tr>
//   ))}
