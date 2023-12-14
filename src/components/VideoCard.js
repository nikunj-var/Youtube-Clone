import React from "react";
const VideoCard = ({ info }) => {
  console.log(info);
  return (
    <div className="p-2 m-2 w-96 shadow-lg">
      <img alt="thumbnail" className="rounded-lg" src={info.snippet.thumbnails.high.url} />
      <ul>
        <li className="font-bold py-2">{info.snippet.title}</li>
        <li>{info.snippet.channelTitle}</li>
        <li>{info.statistics.viewCount}</li>
      </ul>
    </div>
  );
};
export default VideoCard;
