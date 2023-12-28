const VideoTitle = ({ title, overview }) => {
  return (
    <div className="md:pt-[10%] pt-[11%] md:px-24 px-6 absolute w-screen aspect-video text-white bg-gradient-to-r from-black">
      <h1 className="md:text-6xl text-2xl font-bold w-1/2 leading-12">
        {title}
      </h1>
      <p className=" hidden md:inline-block py-6 text-lg w-1/3">{overview}</p>
      <div>
        <button className=" bg-white text-black md:py-4 py-2 md:px-16 px-4 mt-4 font-bold rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className=" hidden md:inline-block mx-4  bg-gray-500 text-white p-4 px-16 font-bold rounded-lg hover:bg-opacity-80">
          ℹ️ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
