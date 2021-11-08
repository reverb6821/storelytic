//! fetch jwt token in the header and store it in localstorage
export default function authHeader() {
    const user = JSON.parse(localStorage.getItem("user"));
  
    if (user && user.accessToken) {

      return { "x-access-token": user.accessToken };
    } else {
      return {};
    }
}