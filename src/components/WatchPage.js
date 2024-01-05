import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { Youtube_Videos_Api } from "../utils/constants";
import CommentContainer from "./CommentContainer";
import LiveChat from "./LiveChat";
const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="w-full">
      <div className="flex w-full">
        <div className="">
          <iframe
            width="1000"
            height="600"
            src={
              "https://www.youtube.com/embed/" +
              searchParams.get("v") +
              "?autoplay=1"
            }
            title="Taarak Mehta Ka Ooltah Chashmah - तारक मेहता का उल्टा चशमाह - Episode 904 - Full Episode"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className=" w-[450px] h-[600px] p-2 ml-2 border border-black bg-slate-100 rounded-lg  overflow-y-scroll flex flex-col-reverse">
          <LiveChat />
        </div>
      </div>
      <CommentContainer />
    </div>
  );
};
export default WatchPage;
