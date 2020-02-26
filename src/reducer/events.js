import { ALL_EVENTS, NEW_EVENT } from "../actions/events";
const initialState = [];

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ALL_EVENTS: {
      return action.payload;
    }
    case NEW_EVENT: {
      return [action.payload, ...state];
    }
    default:
      return state;
  }
};
