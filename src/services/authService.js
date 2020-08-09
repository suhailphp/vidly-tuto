import http from "./httpService";
import { ApiEndPoint } from "../config.json";
import jwtDecode from "jwt-decode";
let endPoint = ApiEndPoint + "user/auth";
let tokenKey = "token";

export async function login(email, password) {
  let { data: jwt } = await http.post(endPoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
}

export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}

export function getJwt() {
  let jwt = localStorage.getItem(tokenKey);
  return jwt;
}
