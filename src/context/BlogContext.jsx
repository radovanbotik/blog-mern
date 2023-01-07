import React, { useState, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { reducer } from "./reducer";
import {
  INIT_LOGIN_PROCESS,
  LOGIN_PROCESS_SUCCESS,
  LOGIN_PROCESS_FAILURE,
  LOGOUT_PROCESS,
  INIT_PROFILE_UPDATE,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_FAILURE,
} from "./actions.js";

const BlogCTX = React.createContext();

const BlogContext = ({ children }) => {
  const initialState = {
    user: retrieveUserFromLocalStorage() || null,
    pending: false,
    error: "false",
  };
  const [posts, setPosts] = useState([]);
  const [globalState, dispatch] = useReducer(reducer, initialState);

  ///Local Storage Actions ///

  function setUserToLocalStorage(user) {
    if (!localStorage.getItem("user")) {
      localStorage.setItem("user", JSON.stringify(user));
      return;
    }
  }
  function retrieveUserFromLocalStorage() {
    if (localStorage.getItem("user"))
      return JSON.parse(localStorage.getItem("user"));
  }

  function removeUserFromLocalStorage() {
    localStorage.removeItem("user");
  }
  ///Login Actions///

  const handleLogin = userCredentials => {
    dispatch({ type: INIT_LOGIN_PROCESS, payload: userCredentials });
  };

  const handleLoginSuccess = user => {
    dispatch({ type: LOGIN_PROCESS_SUCCESS, payload: user });
    setUserToLocalStorage(user);
  };

  const handleLoginFailure = msg => {
    dispatch({ type: LOGIN_PROCESS_FAILURE });
  };

  ///Logout Actions///
  const handleLogout = () => {
    dispatch({ type: LOGOUT_PROCESS });
    removeUserFromLocalStorage();
  };

  ///Update Actions///
  const handleUpdate = () => {
    dispatch({ type: INIT_PROFILE_UPDATE });
  };
  const handleUpdateSuccess = user_update => {
    dispatch({ type: PROFILE_UPDATE_SUCCESS, payload: user_update });
    removeUserFromLocalStorage();
    setUserToLocalStorage(user_update);
  };
  const handleUpdateFailure = () => {
    dispatch({ type: PROFILE_UPDATE_FAILURE });
  };

  ///Fetching Posts///

  useEffect(() => {
    const fetchPosts = async () => {
      const resp = await axios.get("/api/posts");
      setPosts(resp.data);
    };
    fetchPosts();
  }, []);
  return (
    <BlogCTX.Provider
      value={{
        posts,
        globalState,
        handleLogin,
        handleLoginSuccess,
        handleLoginFailure,
        handleLogout,
        handleUpdate,
        handleUpdateSuccess,
        handleUpdateFailure,
      }}
    >
      {children}
    </BlogCTX.Provider>
  );
};

const useBlogData = () => {
  return useContext(BlogCTX);
};
export { BlogContext, useBlogData };
