export function removePosts(indexParam) {
  return {
    type: "REMOVE_POST",
    index: indexParam
  };
}


export function addPosts(post) {
    return {
      type: "ADD_POST",
      post: post
    };
  }

export function addComment(comment,idPost) {
    return {
      type: "ADD_COMMENT",
      comment: comment,
      postId:idPost
    };
  }
  