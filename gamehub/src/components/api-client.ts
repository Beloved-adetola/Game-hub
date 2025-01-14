import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "c09e5a09c7c94cd987b477404a6d272a",
  },
});
