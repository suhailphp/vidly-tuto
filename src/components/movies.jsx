import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Like from "./common/like";
import Pagination from "./common/pagination";
import paginate from "../utils/paginate";
import ListGroup from "./common/listGroup";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    pageNumber: 1,
    selectedGenre: null,
  };

  componentDidMount() {
    this.setState({
      movies: getMovies(),
      genres: getGenres(),
    });
  }

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
  handleGenreSelect = (selectedGenre) => {
    this.setState({
      selectedGenre: selectedGenre._id === "all" ? null : selectedGenre,
      pageNumber: 1,
    });
  };
  render() {
    let { pageNumber, pageSize, selectedGenre, movies: allMovies } = this.state;
    const filtered = selectedGenre
      ? allMovies.filter((movie) => selectedGenre._id === movie.genre._id)
      : allMovies;
    const movies = paginate(filtered, pageNumber, pageSize);
    const { length: count } = filtered;
    const lists = [{ _id: "all", name: "All Movies" }, ...this.state.genres];

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            lists={lists}
            selectedItem={selectedGenre}
            onItemSelect={this.handleGenreSelect}
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
