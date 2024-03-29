// React-QUERY
import { useQuery } from "@tanstack/react-query";
// Utils
import api from "../utils/api";

// Call Movie List Genre Api 
const fetchMovieRecommendations = (queryData) => {
  const id = queryData.queryKey[1]

  return api.get(`/movie/${id}/recommendations`);
};

export const useRecommendationsQuery = (id) => {
  return useQuery({
    queryKey: ["movie-recommendations", id],
    queryFn: fetchMovieRecommendations,
    select: (result) => result.data,
  });
};