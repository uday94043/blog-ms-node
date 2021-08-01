import React from 'react';

const CommentList=({comments})=>{

// const [comments,setComments] = useState({});

// const fetchComments = async () => {
//     const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
//     setComments(res.data);
// };

// useEffect(()=>{
//     fetchComments();
// },[]);

const renderedComments = Object.values(comments).map(comment=>{
    return (
        <li 
        key={comment.id}>
            {comment.content}
        </li>
    );
});

console.log(comments);

    return (<ul>
        {renderedComments}
    </ul>);
};

export default CommentList;