const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[10%] px-24 absolute w-screen aspect-video text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold w-1/2 leading-12">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className=" bg-white text-black p-4 px-16 font-bold rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="mx-4  bg-gray-500 text-white p-4 px-16 font-bold rounded-lg hover:bg-opacity-80">
          ℹ️ More info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
