import axios from "axios";

export default axios.create({
  baseURL: "http://9945dbef7d86.ngrok.io", // need to change accordingly as per changes from ngrok
});
