export const backendURL =
  process.env.NODE_ENV === "production"
    ? "https://dog-breed-voting-backend-c4b3.herokuapp.com/"
    : "http://localhost:4000/";
