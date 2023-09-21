const getTokenFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

export const config = {
  headers: {
    // mode: "no-cors",
    // withCredentials: true, // <-- ADD THIS
    // credentials: "include", // <-- AND THIS
    "Access-Control-Allow-Origin": "*",
    Authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage.token : ""
    }`,
    "Content-Type": "application/json",
  },
};
