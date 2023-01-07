import {
  INIT_LOGIN_PROCESS,
  LOGIN_PROCESS_SUCCESS,
  LOGIN_PROCESS_FAILURE,
  LOGOUT_PROCESS,
  INIT_PROFILE_UPDATE,
  PROFILE_UPDATE_SUCCESS,
  PROFILE_UPDATE_FAILURE,
} from "./actions";

// const initialState = {
//     user: null,
//     pending: false,
//     error: "false",
//   };

export const reducer = (state, action) => {
  if (action.type === INIT_LOGIN_PROCESS) {
    return { ...state, pending: true };
  }
  if (action.type === LOGIN_PROCESS_SUCCESS) {
    return { user: action.payload, pending: false, error: false };
  }
  if (action.type === LOGIN_PROCESS_FAILURE) {
    return { ...state, pending: false, error: true };
  }
  if (action.type === LOGOUT_PROCESS) {
    return { user: null, pending: false, error: false };
  }
  if (action.type === INIT_PROFILE_UPDATE) {
    return { ...state, pending: true };
  }
  if (action.type === PROFILE_UPDATE_SUCCESS) {
    return { user: action.payload, pending: false, error: false };
  }
  if (action.type === PROFILE_UPDATE_FAILURE) {
    return { ...state, error: true };
  }
  return state;
};
