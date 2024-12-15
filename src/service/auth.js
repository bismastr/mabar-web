import axiosClient from "./client";

const loginDiscord = () => {
    window.location.href = axiosClient.defaults.baseURL + "/auth/discord";
};

const getProfile = async () => {
    const res = await axiosClient.get("/auth/profile", {
        withCredentials: true
    });

    return res.data;
}

const createMabar = async (param) => {
    const res = await axiosClient.post("/bot/gaming-session/create", param, {
        headers: {
            "Content-Type": "application/json"
        },
        withCredentials: true
    })

    return res.data
}

export default { loginDiscord, getProfile, createMabar };