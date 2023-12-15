import React from "react";
const VideoCard = ({ info }) => {
  return (
    <div className="p-2 m-2 w-96 shadow-lg">
      <img
        alt="thumbnail"
        className="rounded-lg"
        src={info.snippet.thumbnails.high.url}
      />
      <ul>
        <li className="font-bold py-2">{info.snippet.title}</li>
        <li>{info.snippet.channelTitle}</li>
        <li>{info.statistics.viewCount}</li>
      </ul>
    </div>
  );
};

// higher order component - function that accepts components and return components
export const AdVideoCard = ({ info }) => {
  return (
    <div className="rounded-lg">
      <VideoCard info={info} />
    </div>
  );
};
export default VideoCard;

// debouncing - when we type very fast then the application does not call api on each key press it will skip letters to let you complete your search.

// But when you type slowly then it will make api call on each letter press

// Debouncing with 200ms
//  - if difference between 2 key strokes is < 200ms - decline api channelTitle
//  > 200ms make an api call

fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=iPhone")