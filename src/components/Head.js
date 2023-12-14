import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-3 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className=" h-7 cursor-pointer"
          alt="menuicon"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png"
          onClick={() => toggleMenuHandler()}
        />
        <img
          className="h-8 w-28 ml-4"
          alt="youtube-icon"
          src="https://static.india.com/wp-content/uploads/2023/06/youtube-1.jpg?impolicy=Medium_Resize&w=1200&h=800"
        />
      </div>
      <div className=" col-span-10 text-center">
        <input
          type="text"
          placeholder="Search"
          className=" w-2/4 p-1 border border-gray-400 rounded-l-full"
        />
        <button className="border border-gray-400 p-1 rounded-r-full bg-slate-200">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className=" h-8 w-9"
          alt="user-photo"
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
        />
      </div>
    </div>
  );
};
export default Head;
