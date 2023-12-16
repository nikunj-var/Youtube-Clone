const commentsData = [
  {
    name: "Nikunj",
    text: "Lorem ipsum dolor",
    replies: [
      {
        name: "Nikunj",
        text: "Lorem ipsum dolor",
        replies: [
          {
            name: "Nikunj",
            text: "Lorem ipsum dolor",
            replies: [
              { name: "Nikunj", text: "Lorem ipsum dolor", replies: [] },
              {
                name: "Nikunj",
                text: "Lorem ipsum dolor",
                replies: [
                  { name: "Nikunj", text: "Lorem ipsum dolor", replies: [] },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "Nikunj",
        text: "Lorem ipsum dolor",
        replies: [
          {
            name: "Nikunj",
            text: "Lorem ipsum dolor",
            replies: [
              { name: "Nikunj", text: "Lorem ipsum dolor", replies: [] },
              {
                name: "Nikunj",
                text: "Lorem ipsum dolor",
                replies: [
                  { name: "Nikunj", text: "Lorem ipsum dolor", replies: [] },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Nikunj",
    text: "Lorem ipsum dolor",
    replies: [],
  },
  {
    name: "Nikunj",
    text: "Lorem ipsum dolor",
    replies: [{ name: "Nikunj", text: "Lorem ipsum dolor", replies: [] }],
  },
  {
    name: "Nikunj",
    text: "Lorem ipsum dolor",
    replies: [],
  },
  {
    name: "Nikunj",
    text: "Lorem ipsum dolor",
    replies: [{ name: "Nikunj", text: "Lorem ipsum dolor", replies: [] }],
  },
  {
    name: "Nikunj",
    text: "Lorem ipsum dolor",
    replies: [{ name: "Nikunj", text: "Lorem ipsum dolor", replies: [] }],
  },
  {
    name: "Nikunj",
    text: "Lorem ipsum dolor",
    replies: [{ name: "Nikunj", text: "Lorem ipsum dolor", replies: [] }],
  },
  {
    name: "Nikunj",
    text: "Lorem ipsum dolor",
    replies: [{ name: "Nikunj", text: "Lorem ipsum dolor", replies: [] }],
  },
  {
    name: "Nikunj",
    text: "Lorem ipsum dolor",
    replies: [{ name: "Nikunj", text: "Lorem ipsum dolor", replies: [] }],
  },
  {
    name: "Nikunj",
    text: "Lorem ipsum dolor",
    replies: [{ name: "Nikunj", text: "Lorem ipsum dolor", replies: [] }],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 my-2">
      <img
        alt="user"
        src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
        className="w-8 h-8"
      />
      <div className="px-2">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  // dont use index as keys
  return comments.map((comment) => (
    <div>
      <Comment data={comment} />
      <div className="border border-l-black mx-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="m-2 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentList comments={commentsData} />
      {/* <Comment data={commentsData[0]} /> */}
    </div>
  );
};

export default CommentContainer;
