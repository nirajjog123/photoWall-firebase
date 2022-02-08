import { combineReducers } from "redux";
import data from "../Data/data";

function comments(state = {}, action) {   // {postId:[// array of comments to each id]}
  // name of the reducers should match with name of state **(which is App.js)

  // please note reducer function name should be matched with state key value (which is in app.js)
  switch (action.type) {
    case "ADD_COMMENT":
      //return [...state, action.comment];
       if(!state[action.postId]){
      return {...state,[action.postId]:[action.comment]}   // add comments to each diffrent post
       }else{
         return{...state,[action.postId]:[...state[action.postId],action.comment]}
       }
    default:
      return state;
  }
}

function posts(state = data, action) {

  switch (action.type) {
    case "REMOVE_POST":
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ];
    case "ADD_POST":
      return [...state, action.post];

    default:return state;
  }
}

const rootReducer = combineReducers({ posts, comments });

export default rootReducer;
