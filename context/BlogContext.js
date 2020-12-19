import React, { useReducer, useContext } from "react";

const BlogContext = React.createContext();

export const BlogProvider = ({ reducer, initialState, children }) => {
  return (
    <BlogContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </BlogContext.Provider>
  );
};

export const useStateValue = () => useContext(BlogContext);
