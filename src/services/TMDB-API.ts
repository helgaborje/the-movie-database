import axios from "axios"

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
})

export const get = async <T>(endpoint: string) => {
    const response = await instance.get(endpoint)
    return response.data as T
}