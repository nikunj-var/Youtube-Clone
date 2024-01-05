const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center pt-2 shadow-sm">
      <img
        className=" h-4 w-4"
        alt="user-photo"
        src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
      />
      <span className="px-2 font-bold">{name} </span>
      <span className="px-2">{message}</span>
    </div>
  );
};
export default ChatMessage;
