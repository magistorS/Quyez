import React from "react";
const PostItem = (props)=>{
    return(
<div className="post">
   
    <div className="post__items">
        <strong className="">
            {props.post.id}.{props.post.title}
        </strong>
        <div>
            {props.post.body}
        </div>
    </div>
</div> 
   
);
   
}


export default PostItem;