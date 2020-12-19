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
    default:
      return state;
  }

  return state;
}
