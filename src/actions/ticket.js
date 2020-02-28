import request from "superagent";

export const ALL_TICKETS = "ALL_TICKETS";
export const NEW_TICKET = "NEW_TICKET";
export const ONE_USER_TICKETS = "ONE_USER_TICKETS";
export const EDIT_TICKET = "EDIT_TICKET";

const databaseUrl = "http://localhost:4000";

//get tickets of one event
function allTickets(payload) {
  return {
    type: ALL_TICKETS,
    payload
  };
}

export const getTickets = eventId => dispatch => {
  // console.log("state action in ticket", getState());
  request(`${databaseUrl}/events/${eventId}/tickets`)
    .then(response => {
      console.log("response test", response);
      const action = allTickets(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

//get all tickets
export const getAllTickets = () => dispatch => {
  request(`${databaseUrl}/tickets`)
    .then(response => {
      // console.log("response body test", response.body);
      const action = allTickets(response.body);
      dispatch(action);
    })
    .catch(console.error);
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
      // console.log("createticket", response);
      const action = newTicket(response.body);
      dispatch(action);
      history.push(`/events/${eventId}`);
    })
    .catch(console.error);
};

//get tickets of one user
function oneUserTickets(payload) {
  return {
    type: ONE_USER_TICKETS,
    payload
  };
}

export const getOneUserTickets = ticketId => (dispatch, getState) => {
  const state = getState();
  const { tickets } = state;
  // console.log("state action in ticket", getState());
  if (!tickets.length) {
    request(`${databaseUrl}/user/tickets/${ticketId}`)
      .then(response => {
        // console.log("response test", response);
        const action = oneUserTickets(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};

//edit ticket
const editTicket = payload => ({
  type: EDIT_TICKET,
  payload
});

export const getEditTicket = (ticketId, description, imageUrl, price) => (
  dispatch,
  getState
) => {
  const token = getState().user.token;

  request
    .put(`${databaseUrl}/ticket/${ticketId}/edit`)
    .set("Authorization", `Bearer ${token}`)
    .send(ticketId, description, imageUrl, price)
    .then(res => {
      dispatch(editTicket(res.body));
    })
    .catch(console.error);
};
