import React, {useState, useEffect}from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { postReview } from "../../store/reviews";
import { getBarberShop } from "../../store/barbershop";
import "./ReviewForm.css";

function ReviewForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  // const barberId = id;
  const { barbershopId } = useParams();
  const barbershop = useSelector((state) => state.barbershops.barbershop);
  const user = useSelector((state) => state.session.user);
  const [reviewBody, setReviewBody] = useState("");
  const [rating, setRating] = useState(1);
  const [selectBarber, setSelectBarber] = useState(0);

  useEffect(() => {
    dispatch(getBarberShop(Number(barbershopId)));
  }, [barbershopId, dispatch]);
  if (!barbershop) {
    return <h1>Loading...</h1>;
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    if(selectBarber === 0){
      window.alert("Please select a barber!")
      return
    }
    await dispatch(postReview(selectBarber, { reviewBody, rating}));
    window.alert("Review Created!")
    history.push(`/users/${user.id}`);
  };

  return (
    <div className="review-form-container">
      <h1>Leave a Review</h1>
      <form className="review-form" onSubmit={handleSubmit}>
      <select
          value={selectBarber}
          onChange={(e) => {
            setSelectBarber(e.target.value);
          }}
          name="barbers"
          id="barber-selector"
        >
          <option value={0} >
            Please select a barber
          </option>
          {barbershop.barbers.map((barber) => {
            return (
              <option value={barber.id} key={barber.id}>
                {barber.nickname}
              </option>
            );
          })}
        </select>
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
