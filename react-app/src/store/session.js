// constants
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";
const REMOVE_APPOINTMENT = "session/REMOVE_APPOINTMENT";

const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

const removeUser = () => ({
  type: REMOVE_USER,
});

export const removeUserAppointment = (appointmentId) => ({
  type: REMOVE_APPOINTMENT,
  payload: appointmentId,
});

// thunks
export const authenticate = () => async (dispatch) => {
  const response = await fetch("/api/auth/", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (data.errors) {
    return;
  }
  dispatch(setUser(data));
};

export const login = (email, password) => async (dispatch) => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const data = await response.json();
  if (data.errors) {
    return data;
  }
  dispatch(setUser(data));
  return {};
};

export const logout = () => async (dispatch) => {
  const response = await fetch("/api/auth/logout", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  if (data.errors) {
    return data;
  }
  dispatch(removeUser());
};

export const signUp =
  ({
    username,
    email,
    password,
    firstname,
    lastname,
    age,
    avatarUrl,
    preferredHairStyle,
  }) =>
  async (dispatch) => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        email,
        password,
        firstname,
        lastname,
        age,
        avatarUrl,
        preferredHairStyle,
      }),
    });
    const data = await response.json();
    dispatch(setUser(data));
  };

// reducer

const initialState = { user: null };

// useSelector(state => state.session.user)

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_USER:
      return { user: action.payload };
    case REMOVE_USER:
      return { user: null };
    case REMOVE_APPOINTMENT:
      newState = Object.assign({}, state);
      newState.user.appointments = state.user.appointments.filter(
        (appointment) => appointment.id !== action.payload
      );
      return newState;
    default:
      return state;
  }
}
