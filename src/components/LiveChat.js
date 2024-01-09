import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeid } from "../utils/helper";
const LiveChat = () => {
  const dispatch = useDispatch();
  const [liveMessage, setLiveMessage] = useState("Enter your comment");
  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // api polling logic
      console.log("API POLLING");

      dispatch(addMessage({ name: generateRandomName(), message: makeid(20) }));
    }, 1500);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className=" w-[450px] h-[600px] p-2 ml-2 border border-black bg-slate-100 rounded-lg  overflow-y-scroll flex flex-col-reverse">
        <div>
          {
            /* dont use indexes as key */
            ChatMessages.map((c, i) => (
              <ChatMessage key={i} name={c.name} message={c.message} />
            ))
          }
        </div>
      </div>
      <form
        className="w-full p-2 ml-2 border border-black rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({ name: "Nikunj Varshney", message: liveMessage })
          );
           setLiveMessage("");
        }}
      >
        <input
          className=" w-80"
          type="text"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="mx-2 px-2 bg-green-200">Send</button>
      </form>
    </>
  );
};
export default LiveChat;
