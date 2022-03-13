import axios from "axios";

export default axios.create({
    baseURL: "https://the-good-doctors.herokuapp.com/"
})