import axiosClient from "./axiosClient";

const baseUrl = `https://api-mabar.bism.app/api/v1`;

const getAllGamingSessions = async (param) => {

    const res = await axiosClient.get(baseUrl + "/gaming-session", {
        headers: {
            "Content-Type": "application/json"
        },
        params: param
    })

    return res.data
}

export default { getAllGamingSessions }