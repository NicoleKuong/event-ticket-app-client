import { ALL_TICKETS, NEW_TICKET, ONE_USER_TICKETS } from "../actions/ticket";

const initialState = [];

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case ALL_TICKETS: {
      return action.payload;
    }
    case NEW_TICKET: {
      return [action.payload, ...state];
    }
    //this might need to move
    case ONE_USER_TICKETS:
      return action.payload;
    default:
      return state;
  }
};
