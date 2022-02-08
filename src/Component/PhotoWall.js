import React from "react";
import Photo from "./Photo";
import { Link } from "react-router-dom";

function Photowall(props) {
  return (
    <div>
      <Link className="addIcon" to="/AddPhoto">
        +
      </Link>

      <div className="photoGrid">
        {props.posts
          .sort((x, y) => {
            // sorting logic ... most recent pic will come first
            return y.id - x.id;
          })
          .map((post, index) => (
            <Photo
              key={index}
              pic={post}
              // onRemovePhoto={(post)=>props.onRemovePhoto(post)}
              {...props}
              index={index}
            />
          ))}
      </div>
    </div>
  );
}
export default Photowall;
