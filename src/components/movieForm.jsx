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
    genres: {},
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
    if (this.props.match.params._id !== "new") {
      let data = getMovie(this.props.match.params._id);

      this.setState({
        data: {
          _id: data._id,
          title: data.title,
          genreId: data.genre._id,
          numberInStock: data.dailyRentalRate,
          dailyRentalRate: data.numberInStock,
          liked: data.liked,
        },
      });
    }
    let genres = getGenres();
    this.setState({ genres });
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
          {this.renderSelectMenu("genreId", "Genre", getGenres())}
          {this.renderInputField("numberInStock", "Number in stock")}
          {this.renderInputField("dailyRentalRate", "Daily rental rate")}
          {this.renderButton("Save Movie")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
