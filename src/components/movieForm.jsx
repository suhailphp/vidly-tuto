import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

import { getMovie, saveMovie } from "../services/movieService";
import { getGenres } from "../services/genreService";

class MovieForm extends Form {
  state = {
    data: {
      movieID: null,
      title: "",
      genreID: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    errors: {},
  };
  schema = {
    movieID: Joi.number().allow("", null),
    title: Joi.string().required(),
    genreID: Joi.number().required(),
    numberInStock: Joi.number().required(),
    dailyRentalRate: Joi.number().required(),
  };
  async componentDidMount() {
    let { data: genres } = await getGenres();
    this.setState({ genres });
    if (this.props.match.params._id !== "new") {
      try {
        let { data: movies } = await getMovie(this.props.match.params._id);
        this.setState({
          data: {
            movieID: movies.movieID,
            title: movies.title,
            genreID: movies.genreID,
            numberInStock: movies.numberInStock,
            dailyRentalRate: movies.dailyRentalRate,
          },
        });
      } catch (ex) {
        if (ex.response && ex.response.status === 404) {
          this.props.history.replace("/not-found");
        }
      }
    }
  }
  doSubmit() {
    //console.log(this.state.data);
    saveMovie(this.state.data);
    this.props.history.replace("/movies");
  }
  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInputField("title", "Movie Title")}
          {this.renderSelectMenu("genreID", "Genre", this.state.genres)}
          {this.renderInputField("numberInStock", "Number in stock")}
          {this.renderInputField("dailyRentalRate", "Daily rental rate")}
          {this.renderButton("Save Movie")}
        </form>
      </div>
    );
  }
}

export default MovieForm;
