//this is api call that will pass image to backend
import * as apiCall from '../../api/api.clinet'
import backendUrl from '../../config'; 

const baseUrl = "http://localhost:5000"
console.log(backendUrl,"from vonfig")

export const postImageApi = async (path, imageFile) => {
  const formData = new FormData();
  formData.append('image', imageFile); // Append the file to the FormData object

  const responseType = 'blob'

  console.log("formdata", Array.from(formData))

  try {
    const response = await apiCall.post(baseUrl + path, formData, responseType);
    console.log('Response:', response);
    return response;
  } catch (error) {
    console.error('Error uploading image:', error.message);
    throw new Error('Image upload failed.');
  }
}