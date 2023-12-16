import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { Youtube_Videos_Api } from "../utils/constants";
import CommentContainer from "./CommentContainer";
const WatchPage = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <>
      <div>
        <iframe
          width="1100"
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
      <CommentContainer />
    </>
  );
};
export default WatchPage;
