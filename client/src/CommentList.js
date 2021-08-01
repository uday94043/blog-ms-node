import React from "react";

const CommentList = ({ comments }) => {
  // const [comments,setComments] = useState({});

  // const fetchComments = async () => {
  //     const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
  //     setComments(res.data);
  // };

  // useEffect(()=>{
  //     fetchComments();
  // },[]);

  const renderedComments = Object.values(comments).map((comment) => {
    let content;
    if (comment.status === "approved") {
      content = comment.content;
    } else if (comment.status === "rejected") {
      content = "this comment is rejected";
    } else if (comment.status === "pending") {
      content = "this comment is awaiting moderation";
    }
    return <li key={comment.id}>{content}</li>;
  });

  console.log(comments);

  return <ul>{renderedComments}</ul>;
};

export default CommentList;
