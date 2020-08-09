import http from "../services/httpService";

export function getGenres() {
  return http.get("genre");
}
