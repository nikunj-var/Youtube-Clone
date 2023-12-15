import React, { useEffect, useState } from "react";
import { Youtube_Videos_Api } from "../utils/constants";
import VideoCard, { AdVideoCard } from "./VideoCard";
import { Link } from "react-router-dom";
const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(Youtube_Videos_Api);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className=" ml-4 flex flex-wrap">
      {videos[0] && <AdVideoCard info={videos[0]} key={videos[0].id} />}
      {videos.map((video) => (
        <Link to={"/watch?v=" + video.id}>
          <VideoCard key={video.id} info={video} />
        </Link>
      ))}
    </div>
  );
};
export default VideoContainer;
