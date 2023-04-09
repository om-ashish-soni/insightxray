import React, { useState } from 'react'
import axios from 'axios';
import MedicalReport from './MedicalReport';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {Card,Image, Container, Row, Col, Form, Button, Spinner, ProgressBar } from 'react-bootstrap';

export default function UploadImage() {
    const [file, setFile] = useState(null);
    const [result, setResult] = useState(null);
    const [progress, setProgress] = useState(0);
    const navigate = useNavigate();
    const updateTime=10;
    const updateThreshold=5;
    
    
    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData();
      formData.append('image', file);
      const interval = setInterval(() => {
        setProgress(progress+updateThreshold);
      }, updateTime);
      try {
        const response = await axios.post('/xray/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadProgress: progressEvent => {
            const percentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
            setProgress(percentage);
          }
        });
        
        console.log(response.data.description);
        setResult(response.data.description);
        setProgress(99);
        clearInterval(interval);
        navigate('/medical-report', { state: { 
            results:response.data.description,
            xray:file
         } });
      } catch (error) {
        console.log(error);
      }
    };
  
    const handleFileChange = (event) => {
      setFile(event.target.files[0]);
    };
    
    return(
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={6}>
            <h1 className="text-center mb-4">Upload X-ray Image</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="image">
                <Form.Label>Select an X-ray image to upload:</Form.Label>
                <Form.Control type="file" name="image" onChange={handleFileChange} />
              </Form.Group>
              <Button className="btn btn-primary mt-3" onClick={handleSubmit}>
                  Submit
              </Button>
              {/* <Button className="btn btn-success" type="submit">Submit</Button> */}
              {/* <Button variant="primary" type="submit">Submit</Button> */}
            </Form>
            {file && (
              <div className="text-center mb-3">
                <Image src={URL.createObjectURL(file)} alt="uploaded-xray" fluid rounded />
              </div>
            )}
            {result && (
              <div className="mb-3">
                <Card>
                  <Card.Body>
                    <MedicalReport results={result} xray={file}/>
                  </Card.Body>
                </Card>
                <div className="text-center mt-3">
                  <Button variant="primary" as={Link} to="/print-medical-report" target="_blank">View Printable Report</Button>
                </div>
              </div>
            )}
            {progress > 0 && progress < 100 && (
              <ProgressBar animated now={progress} label={`${progress}%`} />
            )}
          </Col>
        </Row>
      </Container>
    );
}


// import React, { useState } from 'react'
// import axios from 'axios';
// import MedicalReport from './MedicalReport';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import {Card,Image, Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';

// export default function UploadImage() {
//     const [file, setFile] = useState(null);
//     const [result, setResult] = useState(null);
//     const navigate = useNavigate();
//     const handleSubmit = async (event) => {
      
//       event.preventDefault();
//       const formData = new FormData();
//       formData.append('image', file);
//       try {
//         const response = await axios.post('http://127.0.0.1:8000/xray/', formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data'
//           }
//         });
//         console.log(response.data.description);
//         setResult(response.data.description);
        
//         navigate('/medical-report', { state: { 
//             results:response.data.description,
//             xray:file
//          } });
//       } catch (error) {
//         console.log(error);
//       }
//     };
  
//     const handleFileChange = (event) => {
//       setFile(event.target.files[0]);
//     };
//     return(
//     <Container className="py-5">
//       <Row className="justify-content-center">
//         <Col md={6}>
//           <h1 className="text-center mb-4">Upload X-ray Image</h1>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="image">
//               <Form.Label>Select an X-ray image to upload:</Form.Label>
//               <Form.Control type="file" name="image" onChange={handleFileChange} />
//             </Form.Group>
//             <button className="btn btn-primary mt-3" onClick={handleSubmit}>
//                 Submit
//             </button>
//             {/* <Button className="btn btn-success" type="submit">Submit</Button> */}
//             {/* <Button variant="primary" type="submit">Submit</Button> */}
//           </Form>
//           {file && (
//             <div className="text-center mb-3">
//               <Image src={URL.createObjectURL(file)} alt="uploaded-xray" fluid rounded />
//             </div>
//           )}
//           {result && (
//             <div className="mb-3">
//               <Card>
//                 <Card.Body>
//                   <MedicalReport results={result} xray={file}/>
//                 </Card.Body>
//               </Card>
//               <div className="text-center mt-3">
//                 <Button variant="primary" as={Link} to="/print-medical-report" target="_blank">View Printable Report</Button>
//               </div>
//             </div>
//           )}
//         </Col>
//       </Row>
//     </Container>
//     );
// //   return (
// //     <div className="container py-5">
// //       <div className="row">
// //         <div className="col-md-6 offset-md-3">
// //           <h1 className="mb-4 text-center">Upload X-ray Image</h1>
// //           <form onSubmit={handleSubmit}>
// //             <div className="mb-3">
// //               <label htmlFor="image" className="form-label">Select an X-ray image to upload:</label>
// //               <input type="file" name="image" id="image" className="form-control" onChange={handleFileChange} />
// //             </div>
// //             <div className="text-center mb-3">
// //               <button type="submit" className="btn btn-primary">Submit</button>
// //             </div>
// //           </form>
// //           {file && (
// //             <div className="text-center mb-3">
// //               <img src={URL.createObjectURL(file)} alt="uploaded-xray" className="img-fluid rounded" />
// //             </div>
// //           )}
// //           {result && (
// //             <div className="mb-3">
// //               <div className="card">
// //                 <div className="card-body">
// //                   <MedicalReport results={result} xray={file}/>
// //                 </div>
// //               </div>
// //               <div className="text-center mt-3">
// //                 <Link to="/print-medical-report" target="_blank" className="btn btn-primary">View Printable Report</Link>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
  
// }