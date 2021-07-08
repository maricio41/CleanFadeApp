const LOAD_APPOINTMENTS = "appointments/LOAD_APPOINTMENTS";
const LOAD_APPOINTMENT = "appointments/LOAD_APPOINTMENT";
const REMOVE_APPOINTMENT = "appointments/REMOVE_APPOINTMENT";

const loadAppointments = (appointments) => {
  return {
    type: LOAD_APPOINTMENTS,
    payload: appointments
  }
}

const loadAppointment = (appointment) => {
  return {
    type: LOAD_APPOINTMENT,
    payload: appointment
  }
}

const removeAppointment = (appointment) => {
  return{
    type: REMOVE_APPOINTMENT,
    payload: appointment
  }
}

export const getAppointments = (barberId) => async (dispatch) => {
  const response = await fetch(`/api/barbers/${barberId}/appointments`)
  if (response.ok){
    const appointments = await response.json()
    dispatch(loadAppointments(appointments))
  }else{
    throw response;
  }
}

export const getAppointment = (barberId, appointmentId) => async (dispatch) => {
  const response = await fetch(`/api/barbers/${barberId}/appointments/${appointmentId}`)
  if(response.ok){
    const appointment = await response .json()
    dispatch(loadAppointment(appointment))
  }else{
    throw response
  }

}

export const deleteAppointment = (barberId, appointmentId) => async (dispatch) => {
  const response = await fetch(`/api/barbers/${barberId}/appointments/${appointmentId}/delete`, {
    method: "DELETE",
  })
  if(response.ok){
    const {appointment} = await response.json()
    dispatch(removeAppointment(appointmentId))
    return appointment
  }else{
    throw response
  }
}

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
  let newState;
  switch (action.type) {
    case LOAD_APPOINTMENTS:
      newState = Object.assign({}, state)
      newState.appointments = action.payload
      return newState
    case LOAD_APPOINTMENT:
      newState = Object.assign({}, state)
      newState.appointment = action.payload
      return newState
    case REMOVE_APPOINTMENT:
      newState = Object.assign({}, state)
      newState.appointment = action.payload
      return newState
    default:
      return state;
  }
};

export default appointmentReducer;
