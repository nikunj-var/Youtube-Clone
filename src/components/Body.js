import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Main />
    </div>
  );
};
export default Body;
