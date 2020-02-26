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

export const createTicket = (imageUrl, price, description, eventId) => (
  dispatch,
  getState
) => {
  console.log("getstate in ticket", getState());
  const token = getState().user.token;
  //userId
  request
    .post(`${databaseUrl}/events`)
    .set("Authorization", `Bearer ${token}`)
    .send({})
    .then(response => {
      const action = newTicket(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
