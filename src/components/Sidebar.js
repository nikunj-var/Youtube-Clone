import React from "react";
import { useSelector } from "react-redux";
const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // it is known as early return
  if (!isMenuOpen) {
    return null;
  }
  return (
    <div className=" shadow-sm p-5 w-48 overflow-y-auto">
      <ul>
        <li className="p-2">Home</li>
        <li className="p-2">Shorts</li>
        <li className="p-2">Subscriptions</li>
      </ul>
      <hr></hr>
      <h1 className=" font-bold p-2">You &nbsp; </h1>
      <ul>
        <li className="p-2">Your Channel</li>
        <li className="p-2">History</li>
        <li className="p-2">Your Videos</li>
        <li className="p-2">Watch Later</li>
        <li className="p-2"> Show more</li>
      </ul>
      <hr></hr>
      <h1 className="p-2 font-bold">Explore</h1>
      <ul>
        <li className="p-2">Trending</li>
        <li className="p-2">Shopping</li>
        <li className="p-2">Music</li>
        <li className="p-2">Films</li>
        <li className="p-2">Live</li>
        <li className="p-2">Gaming</li>
        <li className="p-2">News</li>
        <li className="p-2">Sport</li>
        <li className="p-2">Learning</li>
        <li className="p-2">Fashion & Beauty</li>
        <li className="p-2">Podcasts</li>
      </ul>
    </div>
  );
};
export default Sidebar;
