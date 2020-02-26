import { ALL_TICKETS, NEW_TICKET } from "../actions/ticket";

const initialState = [];

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ALL_TICKETS: {
      return action.payload;
    }
    case NEW_TICKET: {
      return [action.payload, ...state];
    }
    // case EDIT_TICKET: {
    // }
    default:
      return state;
  }
};
