import http from "../services/httpService";
import { ApiEndPoint } from "../config.json";

export function getMovies() {
  return http.get(ApiEndPoint + "movies");
}

export function getMovie(id) {
  return http.get(ApiEndPoint + "movies/" + id);
}

export function saveMovie(movie) {
  //if it update
  if (movie.movieID) {
    return http.put(ApiEndPoint + "movies/" + movie.movieID, movie);
  }
  //else new movie
  return http.post(ApiEndPoint + "movies", movie);
}

export function deleteMovie(id) {
  return http.delete(ApiEndPoint + "movies/" + id);
}
