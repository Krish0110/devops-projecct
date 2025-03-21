import React from 'react'
import Body from '../../components/Body/Body'
import ReviewForm from '../../components/GetReviewComponet/GetReviewComponent';

const GetReview = () => {
  return(
    <Body children={<ReviewForm />} />
  );
};

export default GetReview;