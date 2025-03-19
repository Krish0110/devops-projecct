import React, {useRef, useState} from 'react'
import Button from '../Button/Button';
import {ImageDisplay, ImagesConatiner, InpaintAppContainer} from './InpaintAppComponentStyled';
import { postImageApi } from '../../pages/InpaintApp/InpaintAppApi';

const InpaintAppComponent = () => {
  const fileInputRef = useRef(null);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [outputImgae, setOutputImage] = useState(null);
  const [outputImgaeUrl, setOutputImageUrl] = useState(null);
  const [isImageUploaded, setIsImageUploaded] = useState(false)

  const handleButtonClicked = async () => {
    if (!isImageUploaded) {
      fileInputRef.current.click();
    } else {
      try {
        const response = await postImageApi('/api/inpaint-input-image', selectedImage);
        console.log("Response from component", response);
        setOutputImage(response);
        setOutputImageUrl(URL.createObjectURL(response));
        setIsImageUploaded(false);
      } catch (error) {
        console.error('Error during image processing:', error);
        alert('Failed to process the image. Please try again.');
      }
    }
  }

  const handleFileChange = (event) =>{
    const file = event.target.files[0];

    if (file && file.type.startsWith('image/')) {
      setSelectedImageUrl(URL.createObjectURL(file));
      setSelectedImage(file);
      setIsImageUploaded(true);
    } else {
      alert("Please select a valid image file.")
    }
  }

  return (
    <InpaintAppContainer>
      <h3>{ isImageUploaded ? "Selected Image:" : "Upload your image to restore" }</h3>
      <ImagesConatiner>
        {selectedImageUrl && (
          <ImageDisplay >
            <img
              src={selectedImageUrl}
              alt="Uploaded Preview"
              style={{ maxWidth: '150px', height: 'auto', borderRadius: '10px' }}
            />
          </ImageDisplay>
        )}
        {outputImgaeUrl && (
          <ImageDisplay >
            <img
              src={outputImgaeUrl}
              alt="Output Preview"
              style={{ maxWidth: '150px', height: 'auto', borderRadius: '10px' }}
            />
          </ImageDisplay>
        )}
      </ImagesConatiner>

      <Button title={ isImageUploaded ? "Restore" : "Upload" } onClick={handleButtonClicked}  />

      <input 
        type="file"
        ref={fileInputRef}
        style={{display:'none'}}
        accept="image/*"
        onChange={handleFileChange}
      />
    </InpaintAppContainer>
  )
}

export default InpaintAppComponent;