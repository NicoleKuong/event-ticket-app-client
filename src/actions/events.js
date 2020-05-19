import request from "superagent";
import databaseUrl from "../constants";

export const ALL_EVENTS = "ALL_EVENTS";
export const NEW_EVENT = "NEW_EVENT";

function allEvents(payload) {
  return {
    type: ALL_EVENTS,
    payload,
  };
}

export const getEvents = () => (dispatch, getState) => {
  const state = getState();
  const { events } = state;
  // console.log("state action", getState());
  if (!events.length) {
    request(`${databaseUrl}/events`)
      .then((response) => {
        // console.log("response test", response);
        const action = allEvents(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};

function newEvent(payload) {
  return {
    type: NEW_EVENT,
    payload,
  };
}

export const createEvent = (
  name,
  description,
  imageUrl,
  startDate,
  endDate
) => (dispatch, getState) => {
  console.log("getstate in event", getState());
  const token = getState().user.token;
  const userId = getState().user.userId;
  request
    .post(`${databaseUrl}/events`)
    .set("Authorization", `Bearer ${token}`)
    .send({ name, description, imageUrl, startDate, endDate, userId })
    .then((response) => {
      const action = newEvent(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
