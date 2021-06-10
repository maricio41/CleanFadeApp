export const addNewAppointment = (barberId, payload) => async (dispatch) => {
  const response = await fetch(`/api/barbers/${barberId}/appointments`, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const { appointment } = await response.json();
    return appointment;
  } else {
    throw response;
  }
};

const initialState = { appointment: null };

const appointmentReducer = (state = initialState, action) => {
  // let { appointment } = action;
  // let newState;
  switch (action.type) {
    default:
      return state;
  }
};

export default appointmentReducer;
