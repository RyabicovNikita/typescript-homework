import { Post, posts } from "./constants.js";


const normalizeData = (unnormalizedData : Post []) => {
  const byId = unnormalizedData.reduce((acc, post) => ({
    ...acc,
    [post.id]: post
  }), {})

  const allIds = unnormalizedData.map(post => post.id);

  return {
    byId,
    allIds
  }
};

console.log(normalizeData(posts));