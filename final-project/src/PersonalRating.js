import React, { useState } from "react";
import { updateRating } from "./api";

export default function PersonalRating(props) {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (e) => {
    setRating(e.target.value);
  };

  return (
    <>
      <form
        data-testid="form"
        onSubmit={(event) => {
          updateRating(props.id, rating);
        }}
      >
        <label>
          Update Rating:
          <input
            type="number"
            value={rating}
            onChange={handleRatingChange}
            min="1"
            max="10"
          />
        </label>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </>
  );
}
