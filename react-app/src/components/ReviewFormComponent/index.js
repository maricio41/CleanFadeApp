import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { postReview } from "../../store/reviews";
import { useState } from "react";
import "./ReviewForm.css";

function ReviewForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const barberId = id;
  console.log(barberId)
  const user = useSelector((state) => state.session.user);
  const [reviewBody, setReviewBody] = useState("");
  const [rating, setRating] = useState(1);

  const handleSubmit = async(e) => {
    e.preventDefault();
    let review = await dispatch(postReview(barberId, { reviewBody, rating}));
    console.log(review)
    history.push(`/users/${user.id}`);
  };

  return (
    <div review-form-container>
      <h1>Leave a Review</h1>
      <form className="review-form" onSubmit={handleSubmit}>
      <textarea
          value={reviewBody}
          onChange={(e) => setReviewBody(e.target.value)}
          required
          placeholder="Tell us about your experience"
        ></textarea>
         <select value={rating} onChange={(e) => setRating(e.target.value)}>
          {" "}
          Rating:
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button type="submit" className="review-btn">
          Submit Review
        </button>
      </form>
    </div>
  );
}

export default ReviewForm;
