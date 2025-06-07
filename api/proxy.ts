import axios from "axios";

export default async function handler(req: any, res: any) {
    console.log("from handle")
  const { postcode, area } = req.query;

  try {
    const response = await axios.get("https://app.wewantwaste.co.uk/api/skips/by-location", {
      params: { postcode, area },
      withCredentials: true,
    });
    res.status(200).json(response.data);
  } catch (error: any) {
    res.status(error.response?.status || 500).json({ message: error.message });
  }
}
