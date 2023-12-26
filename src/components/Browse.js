import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  //Created custom hook, so that here code does not look ugly
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
      MainContainer
         -VideoBackground
         -VideoTitle
      SecondaryContainer
         -MovieList * n
           -Cards * n
      */}
    </div>
  );
};

export default Browse;
