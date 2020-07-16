import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getMovie } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

class MovieForm extends Form {
  state = {
    data: {
      _id: null,
      title: "",
      genre: {},
      numberInStock: "",
      dailyRentalRate: "",
      liked: false,
    },
    genres: {},
    errors: {},
  };
  schema = {
    _id: Joi.string().allow("", null),
    title: Joi.string().required(),
    genre: Joi.object().required(),
    numberInStock: Joi.string().required(),
    dailyRentalRate: Joi.string().required(),
    liked: Joi.boolean(),
  };
  componentDidMount() {
    if (this.props.match.params._id !== "new") {
      let data = getMovie(this.props.match.params._id);
      this.setState({ data });
    }
    let genres = getGenres();
    this.setState({ genres });
  }
  doSubmit() {
    console.log(this.state.data.genres);
    return false;
  }
  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInputField("title", "Movie Title")}
          {this.renderSelectMenu("genre", "Genre", getGenres())}
          {this.renderInputField("numberInStock", "Number in stock")}
          {this.renderInputField("dailyRentalRate", "Daily rental rate")}
          {this.renderButton("Save Movie")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
