import React from 'react';
import { useParams } from 'react-router-dom';
import Comments from './Comments';
import Photo from './Photo';

function Single(props){
  const {id} =  useParams();
  const clickedPost = props.posts.find((post)=>post.id===Number(id));
 const  comments = props.comments[id] || []
 const photoIndex= props.posts.findIndex((post)=>post.id===Number(id));
 // console.log(clickedPost );
    return (
        <div className='single-photo'>
          <Photo  pic={clickedPost} {...props} index= {photoIndex}/>
          <Comments addComment={props.addComment} comments={comments} id={id} />
        </div>
    )
}
 
export default Single;