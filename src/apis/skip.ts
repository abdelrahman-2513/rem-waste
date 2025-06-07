import axios from "axios";
import type { ISkipQuery } from "../interfaces/skip";

async function fetchSkips(query: ISkipQuery) {
  const params = new URLSearchParams();

  if (query.postcode) params.append("postcode", query.postcode);
  if (query.area) params.append("area", query.area);

  const response = await axios.get(`/api/proxy?postcode=NR32&area=Lowestoft`, { withCredentials: true });

  return response.data;
}

export default fetchSkips;
