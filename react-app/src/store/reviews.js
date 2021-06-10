const LOAD_REVIEWS = "reviews/LOAD_REVIEWS";
const LOAD_REVIEW = "reviews/LOAD_REVIEW";
const ADD_REVIEW = "reviews/ADD_REVIEW";
const EDIT_REVIEW = "reviews/EDIT_REVIEW"
const REMOVE_REVIEW = "reviews/REMOVE_REVIEW"
const REMOVE_USER_REVIEW = "reviews/REMOVE_USER_REVIEW"



const loadReviews = (reviews) => {
  return {
      type: LOAD_REVIEWS,
      payload: reviews
  }
}
const loadReview = (review) => {
  return {
      type: LOAD_REVIEW,
      payload: review
  }
}
const addReview = (review) => {
  return {
      type: ADD_REVIEW,
      payload: review
  }
}
const updateReview = (review) => {
    return {
        type: EDIT_REVIEW,
        payload: review
    }
}
const removeReview = (review) => {
    return {
        type: REMOVE_REVIEW,
        payload: review
    }
}

const removeUserReview =(review) => {
    return {
        type: REMOVE_USER_REVIEW,
        payload: review
    }
}

export const getReviews = () => async dispatch => {
    const response = await fetch(`/api/reviews/user`)
    if(response.ok){
        const reviews = await response.json()
        dispatch(loadReviews(reviews))
    }else{
        throw response;
    }
}
export const getReview = (userId, reviewId) => async dispatch => {
    const response = await fetch(`/api/users/${userId}/reviews/${reviewId}`)
    if(response.ok){
        const review = await response.json()
        dispatch(loadReview(review))
    }else{
        throw response;
    }
}
export const postReview = (barberId, payload) => async dispatch => {
    const response = await fetch(`/api/barbers/${barberId}/reviews/create-review`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
    })
    if(response.ok){
        const {review} = await response.json()
        dispatch(addReview(review))
        return review
    }else{
        throw response;
    }
}

export const editReview = (barberId, payload) => async dispatch => {
    const response = await fetch(`/api/barbers/${barberId}/reviews/edit`,{
        method: "PATCH",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json"
        },

    })
    if(response.ok){
        const review = await response.json()
        dispatch(updateReview(review))
        return review
    }else{
        throw response;
    }
}

export const deleteReview = (barberId, reviewId) => async dispatch => {
    const response = await fetch(`/api/barbers/${barberId}/reviews/${reviewId}`,{
        method: "DELETE",

    })
    if(response.ok){
        const review = await response.json()
        dispatch(removeReview(review))
    }else{
        throw response;
    }
}

export const deleteUserReview = (reviewId) => async dispatch => {
    const response = await fetch(`/api/reviews/${reviewId}`,{
        method: "DELETE",

    })
    if(response.ok){
        const review = await response.json()
        dispatch(removeUserReview(review))
    }else{
        throw response;
    }
}
const initialState = {reviews: null, review: null};

const reviewsReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case LOAD_REVIEW:
      newState = Object.assign({},state);
      newState.review = action.task
      return newState;

    case LOAD_REVIEWS:
      newState = Object.assign({},state);
      newState.reviews = action.payload
      return newState;

    case ADD_REVIEW:
      newState = Object.assign({}, state);
      newState.review = action.payload
      return newState;

    case EDIT_REVIEW:
      newState = Object.assign({}, state);
      newState.review = action.payload
      return newState;

    case REMOVE_REVIEW:
      newState = Object.assign({}, state);
      newState.review = action.payload
      return newState;
        default:
      return state;
  }
}

export default reviewsReducer;
