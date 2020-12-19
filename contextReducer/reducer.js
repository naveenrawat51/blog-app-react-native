export const ADD_LOGPOST = "ADD_LOGPOST";
export const DELETE_BLOGPOST = "DELETE_BLOGPOST";
export const UPDATE_BLOGPOST = "UPDATE_BLOGPOST";

export const initialState = {
  blogPosts: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_LOGPOST:
      return {
        ...state,
        blogPosts: [...state.blogPosts, action.payload],
      };
    case DELETE_BLOGPOST:
      const findPostIndex = state.blogPosts.findIndex(
        (blog) => blog.id === action.payload
      );
      const getNewPosts = [...state.blogPosts];
      getNewPosts.splice(findPostIndex, 1);
      return {
        ...state,
        blogPosts: getNewPosts,
      };
    case UPDATE_BLOGPOST:
      const findupdatedBlogIndex = state.blogPosts.findIndex(
        (blog) => blog.id === action.payload.id
      );
      let copyAllPosts = [...state.blogPosts];
      const findBlogToUpdate = copyAllPosts[findupdatedBlogIndex];
      const updatedBlog = { ...findBlogToUpdate, ...action.payload };
      copyAllPosts[findupdatedBlogIndex] = updatedBlog;
      return {
        ...state,
        blogPosts: copyAllPosts,
      };
    default:
      return state;
  }

  return state;
}
