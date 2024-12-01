import axios from "axios";

const baseUrl = `https://api-mabar.bism.app/api/v1`;

const loginDiscord = () => {
    window.location.href = baseUrl + "/auth/discord";
};

const getProfile = async () => {
    const res = await axios.get(baseUrl + "/auth/profile", {
        withCredentials: true
    });

    return res.data;
}

const createMabar = async (param) => {
    const res = await axios.post(baseUrl + "/bot/gaming-session/create", param, {
        headers: {
            "Content-Type": "application/json"
        },
        withCredentials: true
    })

    return res.data
}

export default { loginDiscord, getProfile, createMabar };