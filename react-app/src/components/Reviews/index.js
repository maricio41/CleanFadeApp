import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { deleteUserReview, getReviews } from "../../store/reviews";
import "./MyReviews.css";

function MyReviews() {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews.reviews);
  const review = useSelector((state) => state.reviews);
  // const user = useSelector((state) => state.session.user);
  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);

  const setStarRating = (rating) => {
    let result = "";
    for (let i = 0; i < rating; i++) {
      result += "⭐";
    }
    return result;
  };

  const onDelete = async (reviewId) => {
    await dispatch(deleteUserReview(reviewId));
  };

  if (!reviews.userReviews) {
    return null;
  }

  return (
    <div className="review-container">
      {Object.values(reviews?.userReviews).map((review) => (
        <div className="rev-quote-block">
          <div className="">{setStarRating(review.rating)}</div>
          <div className="">{review.reviewBody}</div>
          {/* <button className="edit-button" type="button">
            Edit
          </button> */}
          <button
            className="delete-button"
            type="button"
            onClick={() => onDelete(review.id)}
          >
            Delete Review
          </button>
        </div>
      ))}
    </div>
  );
}

export default MyReviews;
