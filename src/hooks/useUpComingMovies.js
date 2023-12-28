import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpComingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpComingMovies = () => {
  //Fetch data from TMDB API & update the store
  const dispatch = useDispatch();

  const UpComingMovies = useSelector((store) => store.movies.UpComingMovies);

  const getUpComingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addUpComingMovies(json.results));
  };

  useEffect(() => {
    !UpComingMovies && getUpComingMovies();
  }, []);
};

export default useUpComingMovies;
