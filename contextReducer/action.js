import jsonserver from "../api/jsonserver";

export const ADD_LOGPOST = "ADD_LOGPOST";
export const DELETE_BLOGPOST = "DELETE_BLOGPOST";
export const UPDATE_BLOGPOST = "UPDATE_BLOGPOST";
export const GET_ALL_BLOGPOSTS = "GET_ALL_BLOGPOSTS";

export const getAllPosts = async (dispatch) => {
  try {
    const response = await jsonserver.get("/blogposts");
    dispatch({ type: GET_ALL_BLOGPOSTS, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const addPosts = async (dispatch, data, type) => {
  try {
    await jsonserver.post("/blogposts", data);
    dispatch({ type: type, payload: data });
  } catch (error) {
    console.log("naveen: ", error.message);
  }
};

export const deletePosts = async (dispatch, id) => {
  try {
    await jsonserver.delete(`/blogposts/${id}`);
    dispatch({
      type: DELETE_BLOGPOST,
      payload: id,
    });
  } catch (error) {
    console.log("naveen: ", error.message);
  }
};
