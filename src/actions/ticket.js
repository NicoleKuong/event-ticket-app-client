import request from "superagent";

export const ALL_TICKETS = "ALL_TICKETS";
export const NEW_TICKET = "NEW_TICKET";

const databaseUrl = "http://localhost:4000";

//get tickets of one event
function allTickets(payload) {
  return {
    type: ALL_TICKETS,
    payload
  };
}

export const getTickets = eventId => (dispatch, getState) => {
  const state = getState();
  const { tickets } = state;
  console.log("state action in ticket", getState());
  if (!tickets.length) {
    request(`${databaseUrl}/events/${eventId}/tickets`)
      .then(response => {
        // console.log("response test", response);
        const action = allTickets(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};

//create ticket
function newTicket(payload) {
  return {
    type: NEW_TICKET,
    payload
  };
}

export const createTicket = (
  imageUrl,
  price,
  description,
  eventId,
  history
) => (dispatch, getState) => {
  console.log("getstate in ticket", getState());
  const token = getState().user.token;
  const userId = getState().user.userId;

  request
    .post(`${databaseUrl}/tickets`)
    .set("Authorization", `Bearer ${token}`)
    .send({ imageUrl, price, description, eventId, userId })
    .then(response => {
      console.log("createticket", response);
      const action = newTicket(response.body);
      dispatch(action);
      history.push(`/events/${eventId}`);
    })
    .catch(console.error);
};
