import axiosClient from "./client";

const baseUrl = `https://api-mabar.bism.app/api/v1`;

const getAllGamingSessions = async (param) => {
    const res = await axiosClient.get("/gaming-session", {
        headers: {
            "Content-Type": "application/json"
        },
        params: param
    })

    return res.data
}

export default { getAllGamingSessions }