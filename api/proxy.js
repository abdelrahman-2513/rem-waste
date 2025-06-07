import axios from "axios";

export default async function handler(req, res) {
    const { query } = req;
    try {
        const response = await axios.get("https://app.wewantwaste.co.uk/api/skips/by-location", {
            params: query,
            withCredentials: true,
        });
        res.status(200).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ message: error.message });
    }
}