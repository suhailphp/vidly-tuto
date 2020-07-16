import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Pagination from "./common/pagination";
import paginate from "../utils/paginate";
import ListGroup from "./common/listGroup";
import Moviestable from "./moviesTable";
import _ from "lodash";
import Input from "./common/input";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: null,
    sortColumn: { column: "title", order: "asc" },
    search: "",
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Movies" }, ...getGenres()];
    this.setState({
      movies: getMovies(),
      genres: genres,
    });
  }

  handleSearch = ({ currentTarget: input }) => {
    let search = input.value;
    this.setState({ search, selectedGenre: null });
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
    this.setState({ currentPage: pageNumber });
  };
  handleGenreSelect = (selectedGenre) => {
    this.setState({
      selectedGenre: selectedGenre._id ? selectedGenre : null,
      currentPage: 1,
      search: "",
    });
  };
  handleSort = (sortColumn) => {
    this.setState({ sortColumn: sortColumn });
  };

  getPageData = () => {
    let {
      currentPage,
      pageSize,
      selectedGenre,
      movies: allMovies,
      sortColumn,
      search,
    } = this.state;
    const filtered = selectedGenre
      ? allMovies.filter((movie) => selectedGenre._id === movie.genre._id)
      : allMovies;

    const searched =
      search !== ""
        ? filtered.filter(
            (movie) =>
              movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
          )
        : filtered;

    const sorted = _.orderBy(searched, sortColumn.column, sortColumn.order);
    const movies = paginate(sorted, currentPage, pageSize);
    return { movies, totalCount: filtered.length };
  };

  render() {
    let {
      currentPage,
      pageSize,
      selectedGenre,
      genres,
      sortColumn,
      search,
    } = this.state;
    let { movies, totalCount } = this.getPageData();

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
          <Link to="/movies/new" className="btn btn-success">
            New Move
          </Link>
          <p>Total {totalCount} Records</p>
          <Input
            name="search"
            value={search}
            label=""
            onChange={this.handleSearch}
          />
          <Moviestable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />
          <Pagination
            pageSize={pageSize}
            totalRecords={totalCount}
            onPageChange={this.handlePageChange}
            pageNumber={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
