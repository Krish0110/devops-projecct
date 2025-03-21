import React, { useState, useEffect } from 'react';
import { postReview, getReviews } from '../../api/api.clinet'; // Import getReviews function
import { GetReviewContainer, InputStyled, TextareaStyled, ButtonStyled } from './GetReviewComponentStyled';

const ReviewForm = () => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [postedReview, setPostedReview] = useState(null);  // To store the submitted review
  const [reviews, setReviews] = useState([]);  // To store all fetched reviews

  // Function to submit a review
  const submitReview = async () => {
    const reviewData = {
      name: name,
      review: review,
    };

    const url = 'http://localhost:8000/api/reviews/';

    try {
      const response = await postReview(url, reviewData); // Post the review
      console.log("Review posted successfully:", response);
      setPostedReview(response);  // Set the posted review

      // Optionally clear the form after successful submission
      setName('');
      setReview('');

      // Fetch all reviews after posting a new one
      fetchReviews();
    } catch (error) {
      console.log("Error posting review:", error);
    }
  };

  // Function to fetch reviews from the backend
  const fetchReviews = async () => {
    const url = 'http://localhost:8000/api/reviews/';

    try {
      const reviewsData = await getReviews(url);  // Fetch the reviews
      setReviews(reviewsData);  // Set the fetched reviews
    } catch (error) {
      console.log("Error fetching reviews:", error);
    }
  };

  // Fetch reviews when the component loads
  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <GetReviewContainer>
      <h2>Submit a Review</h2>
      <form onSubmit={(e) => { e.preventDefault(); submitReview(); }}>
        <InputStyled
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextareaStyled
          placeholder="Your review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <ButtonStyled type="submit">Submit Review</ButtonStyled>
      </form>

      {/* Show the posted review below the form */}
      {postedReview && (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
          <h3>Posted Review:</h3>
          <p><strong>Name:</strong> {postedReview.name}</p>
          <p><strong>Review:</strong> {postedReview.review}</p>
        </div>
      )}

      {/* Display all reviews below the submit form */}
      <div style={{ marginTop: '40px' }}>
        <h3>All Reviews</h3>
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div key={index} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px' }}>
              <p><strong>Name:</strong> {review.name}</p>
              <p><strong>Review:</strong> {review.review}</p>
            </div>
          ))
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </GetReviewContainer>
  );
};

export default ReviewForm;
