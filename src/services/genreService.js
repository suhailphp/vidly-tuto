import http from "../services/httpService";
import { ApiEndPoint } from "../config.json";

export function getGenres() {
  return http.get(ApiEndPoint + "genre");
}
