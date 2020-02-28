import {
  ALL_TICKETS,
  NEW_TICKET,
  ONE_USER_TICKETS,
  EDIT_TICKET
} from "../actions/ticket";

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
    case ONE_USER_TICKETS: {
      return action.payload;
    }
    case EDIT_TICKET: {
      const updatedTicket = [...state].map(ticket =>
        ticket.id === action.payload.id
          ? {
              id: action.payload.id,
              imageUrl: action.payload.imageUrl,
              price: action.payload.price,
              description: action.payload.description
            }
          : action.payload
      );
      return updatedTicket;
    }
    default:
      return state;
  }
};
