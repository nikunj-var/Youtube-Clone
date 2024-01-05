import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName, makeid } from "../utils/helper";
const LiveChat = () => {
  const dispatch = useDispatch();

  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {

      // api polling logic
      console.log("API POLLING");

      dispatch(addMessage({ name: generateRandomName(), message: makeid(20)}));
    }, 500);
    return () => clearInterval(i);
  }, []);

  return (
    <>
      {
        /* dont use indexes as key */
        ChatMessages.map((c, i) => (
          <ChatMessage key={i} name={c.name} message={c.message} />
        ))
      }
    </>
  );
};
export default LiveChat;
