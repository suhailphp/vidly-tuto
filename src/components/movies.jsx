import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import paginate from "../utils/paginate";
import ListGroup from "./common/listGroup";

class Movies extends Component {
  state = {
    movies: getMovies(),
    genres: getGenres(),
    pageSize: 4,
    pageNumber: 1,
    selectedGenreID: "all",
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
  handleGenreClick = (_id) => {
    let movies = getMovies();
    if (_id !== "all") {
      movies = movies.filter((movie) => {
        return movie.genre._id === _id;
      });
    }
    this.setState({ selectedGenreID: _id, pageNumber: 1, movies: movies });
  };
  render() {
    const { length: count } = this.state.movies;
    let {
      pageNumber,
      pageSize,
      selectedGenreID,
      movies: allMovies,
    } = this.state;

    const movies = paginate(allMovies, pageNumber, pageSize);
    const lists = [{ _id: "all", name: "All Movies" }, ...this.state.genres];

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            lists={lists}
            selectedID={selectedGenreID}
            onClick={this.handleGenreClick}
          />
        </div>

        <div className="col-10">
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
        </div>
      </div>
    );
  }
}

export default Movies;
