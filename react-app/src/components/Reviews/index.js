import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteReview, getReviews } from "../../store/reviews";
import "./MyReviews.css";

function MyReviews() {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews.reviews);
  const review = useSelector(state => state.reviews)
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

  const onClick = async (e) => {
    e.preventDefault();

    await dispatch(deleteReview( ))

  }

  return (
    <div className="review-container">
      <h1>My Recent Reviews</h1>

      {reviews?.userReviews.map((review) => (
        <div className="rev-quote-block">
          <div className="">{setStarRating(review.rating)}</div>
          <div className="">{review.reviewBody}</div>
          <button className="edit-button" type="button">Edit</button>
          <button className="delete-button" type="button">Delete</button>
        </div>
      ))}
    </div>
  );
}

export default MyReviews;
