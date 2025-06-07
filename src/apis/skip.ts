import type { ISkipQuery } from "../interfaces/skip";
import axiosInstance from "./axios";

async function fetchSkips(query: ISkipQuery) {
  const params = new URLSearchParams();

  if (query.postcode) params.append("postcode", query.postcode);
  if (query.area) params.append("area", query.area);

  const response = await axiosInstance.get(
    `skips/by-location?${params.toString()}`,
    {
      withCredentials: true,
    }
  );

  return response.data;
}

export default fetchSkips;
