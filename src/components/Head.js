import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { Youtube_Search_Api } from "../utils/constants";
const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  useEffect(() => {
    // make an api call after every key press
    // but if the diff between 2 api calls is < 200ms decline the api call

    const timer = setTimeout(() => getSearchSuggestions(), 200);

    // key - i pressed
    //  - render the component
    //  - useEffect()
    //  - start timer => make the api cal after 200ms

    // key - ip pressed
    //  - destroy the component(useEffect return method)
    //  - re-render the component
    //  - useEffect()
    //  - start timer  => make api call after 200ms

    // setTimeout(200) - make an api call after 200ms

    return () => {
      console.log("clear time out called");
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("api called ", searchQuery);
    const data = await fetch(Youtube_Search_Api + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    // console.log("searched data = ", json[1]);
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

      <div className=" col-span-10">
        <div>
          <input
            type="text"
            placeholder="Search"
            className=" w-3/4 py-1 px-4 border border-gray-400 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 px-3 py-1 rounded-r-full bg-slate-200">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className=" fixed bg-white px-5 py-2 w-[50rem] rounded-lg shadow-lg ">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
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
