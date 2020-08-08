import http from "./httpService";
import { ApiEndPoint } from "../config.json";
import jwtDecode from "jwt-decode";
let endPoint = ApiEndPoint + "user/auth";

export async function login(email, password) {
  let { data: jwt } = await http.post(endPoint, { email, password });
  localStorage.setItem("token", jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem("token", jwt);
}

export function logout() {
  localStorage.removeItem("token");
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem("token");
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}
