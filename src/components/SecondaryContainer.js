import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <>
        <div className=" bg-black ">
          <div className="relative top-0 z-20">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            <MovieList title={"Top-Rated"} movies={movies.TopRatedMovies} />
            <MovieList title={"Popular"} movies={movies.PopularMovies} />
            <MovieList title={"UpComing"} movies={movies.UpComingMovies} />
            <MovieList title={"Romantic"} movies={movies.nowPlayingMovies} />
          </div>
        </div>
      </>
    )
  );
};

export default SecondaryContainer;
