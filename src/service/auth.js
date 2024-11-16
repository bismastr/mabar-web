import axios from "axios";

const baseUrl = 'http://localhost:8080/api/v1'

const loginDiscord = () => {
    window.location.href = baseUrl + "/auth/discord"
};

const getProfile = async () => {
    const res = await axios.get(baseUrl + "/auth/profile", {
        withCredentials: true
    })

    return res.data
}

export default { loginDiscord, getProfile }