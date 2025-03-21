import styled from 'styled-components';

// Container for the review form
const GetReviewContainer = styled.div`
  z-index: 100;
  position: absolute; 
  margin-top: 50px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  text-align: center;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
  background-color: white;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 20px;
  border-radius: 15px;
`;

// Styled input field
const InputStyled = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

// Styled textarea for the review text
const TextareaStyled = styled.textarea`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  height: 150px;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

// Styled button for submission
const ButtonStyled = styled.button`
  width: 100%;
  padding: 12px;
  background-color: black;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  
  &:hover {
    background-color: #0056b3;
  }
`;

export { GetReviewContainer, InputStyled, TextareaStyled, ButtonStyled };
