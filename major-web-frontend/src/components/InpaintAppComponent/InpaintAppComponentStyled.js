import styled from 'styled-components'

const InpaintAppContainer = styled.div`
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
`

const ImagesConatiner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const ImageDisplay = styled.div`
  margin: 20px;
`

export {
  InpaintAppContainer,
  ImagesConatiner,
  ImageDisplay,
};