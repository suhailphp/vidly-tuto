import http from "./httpService";
import { ApiEndPoint } from "../config.json";
let endPoint = ApiEndPoint + "user";

export function getUsers() {
  return http.get(endPoint);
}

export function getUser(id) {
  return http.get(endPoint + "/" + id);
}

export function registerUser(user) {
  if (user.UserID) {
    return http.put(endPoint + "/" + user.UserID, user);
  }
  return http.post(endPoint, user);
}

export function deleteUser(id) {
  return http.delete(endPoint + "/" + id);
}
