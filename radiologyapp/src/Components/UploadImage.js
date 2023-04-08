import React, { useState } from 'react'
import axios from 'axios';
import MedicalReport from './MedicalReport';
export default function UploadImage() {
    const [file, setFile] = useState(null);
    const [result, setResult] = useState(null);
  
    const handleSubmit = async (event) => {
        
      event.preventDefault();
      const formData = new FormData();
      formData.append('image', file);
      try {
        const response = await axios.post('http://127.0.0.1:8000/xray/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log(response.data.description);
        setResult(response.data.description);
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleFileChange = (event) => {
      setFile(event.target.files[0]);
    };
  
    return (
      <div>
        <h1>Upload X-ray Image</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="file" name="image" onChange={handleFileChange} />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
        {file && (
        <div>
            <img src={URL.createObjectURL(file)} alt="uploaded-xray" />
        </div>
        )}
        {result && (
        <>
        
        <MedicalReport results={result} xray={file}/>
        </>
      )}
      </div>
    );
  }
  

