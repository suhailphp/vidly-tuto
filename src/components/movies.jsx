import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import paginate from "../utils/paginate";

class Movies extends Component {
  state = {
    movies: getMovies(),
    pageSize: 4,
    pageNumber: 1,
  };

  handleDelete = (_id) => {
    this.setState({
      movies: this.state.movies.filter((movie) => movie._id !== _id),
    });
  };

  handleLike = (movie) => {
    let movies = [...this.state.movies];
    let index = movies.indexOf(movie);
    movies[index].liked = !movies[index].liked;
    this.setState(movies);
  };
  handlePageChange = (pageNumber) => {
    this.setState({ pageNumber: pageNumber });
  };
  render() {
    const { length: count } = this.state.movies;
    const { pageNumber, pageSize, movies: allMovies } = this.state;
    if (count === 0) return <p>there are no Movies!</p>;
    const movies = paginate(allMovies, pageNumber, pageSize);

    return (
      <React.Fragment>
        <p>Total {count} Records</p>
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
            {movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie._id)}
                    className="btn btn-danger btn-small"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          pageSize={pageSize}
          totalRecords={count}
          onPageChange={this.handlePageChange}
          pageNumber={pageNumber}
        />
      </React.Fragment>
    );
  }
}

export default Movies;
