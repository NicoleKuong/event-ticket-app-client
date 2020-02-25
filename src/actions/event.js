import axios from "axios";

export const ALL_EVENTS = "ALL_EVENTS";
export const NEW_EVENT = "NEW_EVENT";

const databaseUrl = "http://localhost:4000";

function allEvents(payload) {
  return {
    type: ALL_EVENTS,
    payload
  };
}

export const getEvent = () => {
  return async function(dispatch, getState) {
    const response = await axios
      .get(`${databaseUrl}/events`)
      .then(response => {
        dispatch(allEvents(response.body));
      })
      .catch(error => {
        throw error;
      });
  };
};

// const getEvents = () => (dispatch, getState) => {
//   const state = getState();
//   const { events } = state;
//   if (!events.length) {
//     request(`${baseUrl}/events`)
//       .then(response => {
//         const action = getEvents(response.body);
//         dispatch(action);
//       })
//       .catch(console.error);
//   }
// };

function newEvent(payload) {
  return {
    type: NEW_EVENT,
    payload
  };
}
export const createEvent = (
  name,
  description,
  imageUrl,
  startDate,
  endDate
) => {
  return async function(dispatch, getState) {
    const token = getState().user.token;

    const response = await axios({
      method: "POST",
      url: `${databaseUrl}/events`,
      headers: {
        authorization: `Bearer ${token}`
      },
      data: {
        name,
        description,
        imageUrl,
        startDate,
        endDate
      }
    });
    dispatch(newEvent(response.data));
  };
};

// dispatch => {
//   console.log("hash", data);
//   request
//     .post(`${baseUrl}/images`)
//     .set("Authorization", `Bearer ${hash}`)
//     .send(data)
//     .then(response => {
//       const action = newImage(response.body);
//       dispatch(action);
//     })
//     .catch(console.error);
// };
