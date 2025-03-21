import axios from 'axios';

const postReview = async (url, body, responseType = 'json') => {
  console.log("Posting review to URL:", url);
  
  try {
    const response = await axios.post(url, body, {
      responseType: responseType, // Optional depending on the response
    });

    console.log("Review post response:", response);
    return response.data;
  } catch (error) {
    console.log('Error posting review:', error.message);
  }
};

const getReviews = async (url) => {
  try {
    const response = await axios.get(url);
    console.log("Reviews fetched successfully", response.data);
    return response.data;  // Return the reviews data
  } catch (error) {
    console.log('Error fetching reviews:', error.message);
  }
};

export { postReview, getReviews };
