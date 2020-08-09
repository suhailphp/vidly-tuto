import http from "./httpService";

let endPoint = "user";

export function registerUser(user) {
  if (user.UserID) {
    return http.put(endPoint + "/" + user.UserID, user);
  }
  return http.post(endPoint, user);
}

// export function getUsers() {
//   return http.get(endPoint);
// }

// export function getUser(id) {
//   return http.get(endPoint + "/" + id);
// }

// export function deleteUser(id) {
//   return http.delete(endPoint + "/" + id);
// }
