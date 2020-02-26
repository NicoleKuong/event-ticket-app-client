import request from "superagent";

export const ALL_EVENTS = "ALL_EVENTS";
export const NEW_EVENT = "NEW_EVENT";

const databaseUrl = "http://localhost:4000";

function allEvents(payload) {
  return {
    type: ALL_EVENTS,
    payload
  };
}

export const getEvents = () => (dispatch, getState) => {
  const state = getState();
  const { events } = state;
  console.log("state action", getState());
  if (!events.length) {
    request(`${databaseUrl}/events`)
      .then(response => {
        console.log("response test", response);
        const action = allEvents(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};

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
) => (dispatch, getState) => {
  const token = getState().user.token;
  request
    .post(`${databaseUrl}/events`)
    .set("Authorization", `Bearer ${token}`)
    .send({ name, description, imageUrl, startDate, endDate })
    .then(response => {
      const action = newEvent(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

// export const createEvent = (
//   name,
//   description,
//   imageUrl,
//   startDate,
//   endDate
// ) => {
//   return async function(dispatch, getState) {
//     const token = getState().user.token;

//     const response = await axios({
//       method: "POST",
//       url: `${databaseUrl}/events`,
//       headers: {
//         authorization: `Bearer ${token}`
//       },
//       data: {
//         name,
//         description,
//         imageUrl,
//         startDate,
//         endDate
//       }
//     });
//     dispatch(newEvent(response.data));
//   };
// };

// export const getEvents = () => {
//   return async function(dispatch, getState) {
//     const response = await axios
//       .get(`${databaseUrl}/events`)
//       .then(response => {
//         console.log("event action", response.body);
//         dispatch(allEvents(response.body));
//       })
//       .catch(error => {
//         throw error;
//       });
//   };
// };
