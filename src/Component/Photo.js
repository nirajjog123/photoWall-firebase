import React from "react";

import { Link, useNavigate } from "react-router-dom";

function Photo(props){

        const data= props.pic;
        const navigate = useNavigate();
            return <figure className="figure">
                <Link to={`./Single/${data.id}`}>
                <img className="photo" src={data.imageLink} alt="imageViwer"></img>
                </Link>
                <figcaption><p>{data.description}</p></figcaption>
                <div className="button-container">
                <button
                onClick={()=>{
                    props.removePosts(props.index)
                    navigate('/'); // cant use useHistory here ****
                }
                }
                >Remove</button>
                <Link className= 'button' to={`./Single/${data.id}`}>
                <div className="comment-count">
                    <div className="speech-bubble"></div>
                    {props.comments[data.id] && props.comments[data.id].length}
                </div>

                </Link>
                </div>
            </figure>
}

export default Photo;