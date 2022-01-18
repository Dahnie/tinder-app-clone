// Axios makes HTTP request super simple, it allows us make HTTP requests from both the browser and node.js
// Promised base HTTP client fir the browser and Nodejs
import axios from "axios";

const instance = axios.create({
    baseURL: "https://tinder-clone-backend-v-1.herokuapp.com/"
});

export default instance;


