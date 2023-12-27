import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] ml-[27%]">
      <form className=" bg-black w-1/2 flex justify-center items-center">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          className="p-4 m-4 flex-1 rounded-lg "
        />
        <button className="py-3 mx-4 w-32 px-4 bg-red-700 text-white font-bold rounded-lg">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
