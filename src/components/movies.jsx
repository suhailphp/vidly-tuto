import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

import Pagination from "./common/pagination";
import paginate from "../utils/paginate";
import ListGroup from "./common/listGroup";
import Moviestable from "./moviesTable";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: null,
  };

  componentDidMount() {
    const genres = [{ name: "All Movies" }, ...getGenres()];
    this.setState({
      movies: getMovies(),
      genres: genres,
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
    this.setState({ currentPage: pageNumber });
  };
  handleGenreSelect = (selectedGenre) => {
    this.setState({
      selectedGenre: selectedGenre._id ? selectedGenre : null,
      currentPage: 1,
    });
  };
  handleSort = (field) => {
    console.log(field);
  };

  render() {
    let {
      currentPage,
      pageSize,
      selectedGenre,
      movies: allMovies,
      genres,
    } = this.state;
    const filtered = selectedGenre
      ? allMovies.filter((movie) => selectedGenre._id === movie.genre._id)
      : allMovies;
    const movies = paginate(filtered, currentPage, pageSize);
    const { length: count } = filtered;

    return (
      <div className="row">
        <div className="col-2">
          <ListGroup
            lists={genres}
            selectedItem={selectedGenre}
            onItemSelect={this.handleGenreSelect}
          />
        </div>

        <div className="col-10">
          <p>Total {count} Records</p>
          <Moviestable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            pageSize={pageSize}
            totalRecords={count}
            onPageChange={this.handlePageChange}
            pageNumber={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
