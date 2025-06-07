
import { useQuery } from "@tanstack/react-query";
import type { ISkipQuery } from "../interfaces/skip";
import fetchSkips from "../apis/skip";

export function useSkips(query: ISkipQuery) {
    return useQuery(
        {
            queryKey: ["skips", query],
            queryFn: () => fetchSkips(query),
            staleTime: 1000 * 60 * 5,
            retry: 1,
        }
    );
}
