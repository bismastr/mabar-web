import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://api-mabar.bism.app/api/v1",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    withCredentials: true
})

export default axiosClient;