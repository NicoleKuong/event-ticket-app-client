import request from "superagent";

export const ALL_COMMENTS = "ALL_COMMENTS";
export const NEW_COMMENT = "NEW_COMMENT";

const databaseUrl = "http://localhost:4000";

//get comment of one ticket
function allComments(payload) {
  return {
    type: ALL_COMMENTS,
    payload
  };
}

export const getComments = ticketId => (dispatch, getState) => {
  const state = getState();
  const { comments } = state;
  console.log("state action in comment", getState());
  if (!comments.length) {
    request(`${databaseUrl}/tickets/${ticketId}/comments`)
      .then(response => {
        // console.log("response test", response);
        const action = allComments(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};

//create comment
function newComment(payload) {
  return {
    type: NEW_COMMENT,
    payload
  };
}

export const createComment = (content, ticketId) => (dispatch, getState) => {
  console.log("getstate in comment", getState());
  const token = getState().user.token;
  const userId = getState().user.userId;

  request
    .post(`${databaseUrl}/comments`)
    .set("Authorization", `Bearer ${token}`)
    .send({ content, ticketId, userId })
    .then(response => {
      console.log("createcomment", response);
      const action = newComment(response.body);
      dispatch(action);
      // history.push(`/events/${eventId}`);
    })
    .catch(console.error);
};
