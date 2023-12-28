import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { NETFLIX_BODY } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <>
      <div className="fixed -z-10 overflow-hidden h-screen">
        <img
          src={NETFLIX_BODY}
          className="h-screen object-cover md:w-screen "
        />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearchPage;
