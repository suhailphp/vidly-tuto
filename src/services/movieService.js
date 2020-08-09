import http from "../services/httpService";

let endPoint = "movies";
export function getMovies() {
  return http.get(endPoint);
}

export function getMovie(id) {
  return http.get(endPoint + "/" + id);
}

export function saveMovie(movie) {
  //if it update
  if (movie.movieID) {
    return http.put(endPoint + "/" + movie.movieID, movie);
  }
  //else new movie
  return http.post(endPoint, movie);
}

export function deleteMovie(id) {
  return http.delete(endPoint + "/" + id);
}
