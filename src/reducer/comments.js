import { ALL_COMMENTS, NEW_COMMENT } from "../actions/comments";
const initialState = [];

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ALL_COMMENTS: {
      return action.payload;
    }
    case NEW_COMMENT: {
      return [action.payload, ...state];
    }
    default:
      return state;
  }
};
