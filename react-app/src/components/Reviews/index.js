import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getReviews } from "../../store/reviews";
// import { Container } from "react-bootstrap";
// import { FaRegStar } from "react-icons/fa";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "./MyReviews.css";

function MyReviews() {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews.reviews);
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

  return (
    <div className="review-container">
      <h2>My Recent Reviews</h2>

      {reviews?.userReviews.map((review) => (
        <div className="rev-quote-block">
          <div className="">{setStarRating(review.rating)}</div>
          <div className="">{review.reviewBody}</div>
          {/* <i class="fas fa-star"></i> */}
        </div>
      ))}
    </div>
  );
}

export default MyReviews;
