import { postReview } from "../../api/api.clinet";

export const submitReview = async () => {
    const reviewData = {
      name: 'John Doe',
      review: 'Great service!',
    };
    
    const url = 'http://localhost:8000/api/reviews/'; // URL to post the review
  
    try {
      const response = await postReview(url, reviewData);
      console.log("Review posted successfully:", response);
    } catch (error) {
      console.log("Error posting review:", error);
    }
  };