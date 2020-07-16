import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getMovie, saveMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

class MovieForm extends Form {
  state = {
    data: {
      _id: null,
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
      liked: false,
    },
    genres: [],
    errors: {},
  };
  schema = {
    _id: Joi.string().allow("", null),
    title: Joi.string().required(),
    genreId: Joi.string().required(),
    numberInStock: Joi.number().required(),
    dailyRentalRate: Joi.number().required(),
    liked: Joi.boolean(),
  };
  componentDidMount() {
    let genres = getGenres();
    this.setState({ genres });
    if (this.props.match.params._id !== "new") {
      let movies = getMovie(this.props.match.params._id);
      if (!movies) return this.props.history.replace("/not-found");

      //console.log(movies);
      this.setState({
        data: {
          _id: movies._id,
          title: movies.title,
          genreId: movies.genre._id,
          numberInStock: movies.dailyRentalRate,
          dailyRentalRate: movies.numberInStock,
          liked: movies.liked,
        },
      });
    }
  }
  doSubmit() {
    console.log(this.state.data);
    saveMovie(this.state.data);
    this.props.history.replace("/movies");
  }
  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInputField("title", "Movie Title")}
          {this.renderSelectMenu("genreId", "Genre", this.state.genres)}
          {this.renderInputField("numberInStock", "Number in stock")}
          {this.renderInputField("dailyRentalRate", "Daily rental rate")}
          {this.renderButton("Save Movie")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
