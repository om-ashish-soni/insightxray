import React from 'react';
import { useLocation } from 'react-router-dom';
import { Card, Image, Table, Container, Row, Col, Form, Button, Spinner } from 'react-bootstrap';

const diseaseDescriptions = {
    "Infiltration": {
        "description": "Infiltration refers to an abnormal substance or cells that have built up in the lung tissue. This can be caused by infections or inflammation.",
        "care": "Treatment depends on the underlying cause of the infiltration. Antibiotics may be prescribed for infections, and anti-inflammatory medication may be given for inflammation. In some cases, oxygen therapy may be necessary.",
        "prevention": "Preventing the underlying causes of infiltration, such as smoking cessation, may reduce the risk of developing this condition.",
        "motivation": "Take control of your health by making healthy choices that can help prevent lung damage."
    },
    "Mass": {
        "description": "A mass in the lung refers to a growth or lump that can be cancerous or non-cancerous. Further testing may be required to determine the nature of the mass.",
        "care": "Treatment options vary depending on the type of mass and may include surgery, chemotherapy, or radiation therapy. The goal of treatment is to remove or reduce the size of the mass.",
        "prevention": "Prevention measures for lung cancer, such as smoking cessation, may help reduce the risk of developing lung masses.",
        "motivation": "Remember that early detection is key when it comes to lung cancer. Speak with your doctor about any concerning symptoms."
    },
    "Pleural_Thickening": {
        "description": "Pleural thickening occurs when the lining of the lungs becomes thickened, which can restrict breathing and cause discomfort.",
        "care": "Treatment options depend on the severity of the condition and may include medication, surgery, or other procedures. In some cases, pleural thickening may be a sign of an underlying condition that needs to be treated.",
        "prevention": "Preventing exposure to asbestos, which is a known cause of pleural thickening, may help reduce the risk of developing this condition.",
        "motivation": "Taking care of your lungs is important. Speak with your doctor about any respiratory symptoms you may be experiencing."
    },
    "Fibrosis": {
        "description": "Fibrosis refers to the formation of scar tissue in the lungs, which can make it difficult to breathe.",
        "care": "There is no cure for fibrosis, but treatment options may help alleviate symptoms. These may include medication, oxygen therapy, or pulmonary rehabilitation.",
        "prevention": "Preventing lung damage by avoiding exposure to harmful substances, such as cigarette smoke and pollution, may reduce the risk of developing fibrosis.",
        "motivation": "Living with a chronic condition can be challenging, but there are resources and support available to help you manage your symptoms and improve your quality of life."
    },
    "Nodule": {
        "description": "A nodule is a small, round growth or lump that can be found in the lungs. They can be benign or malignant and are often discovered during routine imaging tests.",
        "care": "The recommended course of care depends on whether the nodule is benign or malignant. Your doctor may suggest regular imaging tests to monitor the nodule, or a biopsy or surgery to remove it if necessary.",
        "prevention": "There are no known ways to prevent nodules from forming in the lungs, but not smoking and avoiding exposure to environmental toxins can help reduce your risk.",
        "motivation": "Remember that early detection is key when it comes to nodules. If you have a nodule, work closely with your doctor to determine the best course of action and stay proactive with your follow-up care."
    },
    "Pneumothorax": {
        "description": "Pneumothorax is a condition in which air leaks into the space between your lungs and chest wall, causing the lung to collapse. This can cause symptoms like chest pain, shortness of breath, and rapid heart rate.",
        "care": "Treatment for pneumothorax typically involves removing the air from the space between your lung and chest wall, either through a needle or chest tube. In some cases, surgery may be necessary.",
        "prevention": "Pneumothorax can be caused by a variety of factors, including injury, lung disease, or certain medical procedures. Avoiding behaviors like smoking and excessive coughing can help reduce your risk.",
        "motivation": "While pneumothorax can be a serious condition, it is treatable with prompt medical care. If you experience symptoms like chest pain or shortness of breath, seek medical attention right away to prevent complications."
    },
    "Emphysema": {
        "description": "Emphysema is a type of chronic obstructive pulmonary disease (COPD) that damages the air sacs in the lungs, making it difficult to breathe. It is typically caused by long-term exposure to irritants like cigarette smoke.",
        "care": "There is no cure for emphysema, but treatment can help manage symptoms and slow the progression of the disease. This may include medications, oxygen therapy, and pulmonary rehabilitation.",
        "prevention": "The best way to prevent emphysema is to avoid smoking and exposure to secondhand smoke and other environmental irritants.",
        "motivation": "While emphysema can be a debilitating disease, there are many treatment options available that can help you breathe easier and maintain your quality of life. If you are a smoker, quitting now can help prevent further damage to your lungs."
    },
    "Fracture": {
        "description": "A fracture is a break in one of the bones in your chest, often as a result of trauma or injury. Symptoms can include pain, swelling, and difficulty breathing.",
        "care": "Treatment for a chest fracture typically involves immobilizing the affected area with a brace or cast. In some cases, surgery may be necessary to realign the broken bones.",
        "prevention": "To reduce your risk of chest fractures, it's important to wear protective gear during high-risk activities like contact sports and to take steps to prevent falls.",
        "motivation": "While chest fractures can be painful and disruptive, they are often treatable with prompt medical care. Be sure to follow your doctor's instructions for care and take steps to prevent future fractures."
    },
    "Consolidation": {
        "description": "Consolidation is a condition in which the lung tissue becomes firm and loses its spongy texture.",
        "care": "Treatment for consolidation typically involves addressing the underlying cause of the condition, such as pneumonia or bronchitis. Your doctor may prescribe antibiotics, bronchodilators, or other medications to help alleviate symptoms.",
        "prevention": "Prevention of consolidation involves practicing good respiratory hygiene, such as washing your hands frequently, avoiding close contact with people who are sick, and covering your mouth and nose when coughing or sneezing.",
        "motivation": "Remember to prioritize your health and seek medical attention if you experience any respiratory symptoms or have a history of lung disease."
    },
    "Lung Opacity": {
        "description": "Lung opacity refers to an area of the lung that appears hazy or cloudy on a chest X-ray or CT scan.",
        "care": "Treatment for lung opacity depends on the underlying cause. Your doctor may recommend further imaging tests or a biopsy to determine the cause of the opacity. Treatment may involve medications, surgery, or other interventions depending on the cause.",
        "prevention": "Prevention of lung opacity involves avoiding risk factors for lung disease, such as smoking and exposure to air pollution.",
        "motivation": "Taking care of your respiratory health is essential for overall well-being. Remember to take steps to protect your lungs, such as quitting smoking and reducing exposure to air pollution."
    },
    "Enlarged Cardiomediastinum": {
        "description": "Enlarged cardiomediastinum refers to an abnormality in the size or shape of the heart and surrounding structures as seen on a chest X-ray.",
        "care": "Treatment for an enlarged cardiomediastinum depends on the underlying cause. Your doctor may recommend further testing or refer you to a specialist for further evaluation and treatment.",
        "prevention": "Prevention of an enlarged cardiomediastinum involves managing risk factors for heart disease, such as maintaining a healthy diet, exercising regularly, and controlling high blood pressure.",
        "motivation": "Remember to prioritize your cardiovascular health and speak with your doctor about any concerns you may have about your heart and surrounding structures."
    },
    "Effusion": {
        "description": "Effusion refers to a buildup of fluid in the space between the lungs and chest wall.",
        "care": "Treatment for effusion typically involves draining the fluid and addressing the underlying cause of the buildup, such as heart failure or pneumonia. Your doctor may prescribe medications or recommend other interventions depending on the cause of the effusion.",
        "prevention": "Prevention of effusion involves managing risk factors for heart and lung disease, such as controlling high blood pressure, maintaining a healthy weight, and avoiding smoking.",
        "motivation": "Taking care of your cardiovascular and respiratory health is crucial for overall well-being. Remember to speak with your doctor about any concerns you may have and prioritize your health."
    },
    "Cardiomegaly": {
        "description": "Cardiomegaly is a condition in which the heart is enlarged.",
        "care": "Treatment for cardiomegaly typically involves addressing the underlying cause of the condition. This may include lifestyle changes, medications, or surgery.",
        "prevention": "To help prevent cardiomegaly, it's important to maintain a healthy lifestyle. This includes eating a balanced diet, getting regular exercise, and avoiding smoking and excessive alcohol consumption.",
        "motivational_talk": "Taking care of your heart is crucial for overall health and well-being. By making healthy choices and following your doctor's recommendations, you can manage cardiomegaly and live a fulfilling life."
    },
    "Lung Lesion": {
        "description": "A lung lesion refers to an abnormality or spot on the lung.",
        "care": "The appropriate treatment for a lung lesion depends on the underlying cause. This may include monitoring the lesion, medications, or surgery.",
        "prevention": "To help prevent lung lesions, it's important to avoid smoking and exposure to harmful chemicals or pollutants.",
        "motivational_talk": "By taking care of your lungs, you can improve your overall health and well-being. If you have a lung lesion, it's important to work with your doctor to determine the best course of treatment."
    },
    "Atelectasis": {
        "description": "Atelectasis is a condition in which one or more areas of the lungs collapse or don't inflate properly.",
        "care": "Treatment for atelectasis may involve removing any blockages in the airways, using a machine to help you breathe, or surgery.",
        "prevention": "To help prevent atelectasis, it's important to quit smoking and get regular exercise. If you have a condition that affects your ability to breathe, such as chronic obstructive pulmonary disease (COPD), it's important to work with your doctor to manage the condition.",
        "motivational_talk": "By taking steps to improve your lung health, you can improve your overall quality of life. If you have atelectasis, working with your doctor to manage the condition can help you breathe easier and feel better."
    },
    "Hernia": {
        "description": "A hernia occurs when an organ or tissue bulges through a weak spot in the surrounding muscle or connective tissue.",
        "care": "Treatment for a hernia may involve observation, medication, or surgery.",
        "prevention": "To help prevent a hernia, it's important to maintain a healthy weight, exercise regularly, and avoid heavy lifting. If you have a condition that increases your risk of developing a hernia, such as chronic constipation or a persistent cough, it's important to work with your doctor to manage the condition.",
        "motivational_talk": "By taking care of your body and avoiding activities that increase your risk of a hernia, you can reduce your risk of developing this condition. If you do develop a hernia, working with your doctor to determine the best course of treatment can help you get back to your normal activities."
    },
    "Edema": {
        "description": "Edema is the buildup of fluid in the body's tissues, often causing swelling in the arms, legs, feet, and ankles.",
        "care": "If you are experiencing symptoms of edema, such as swelling, it is important to consult with your healthcare provider. Treatment may include medications, compression stockings, or lifestyle changes such as reducing salt intake and increasing physical activity.",
        "prevention": "Preventing edema involves maintaining a healthy lifestyle, including regular exercise, a balanced diet, and avoiding sitting or standing in one position for too long.",
        "motivation": "Remember, taking care of your body is important to prevent the onset of edema. Don't hesitate to reach out to your healthcare provider for guidance on how to manage and prevent edema."
    },
    "Pneumonia": {
        "description": "Pneumonia is an infection in one or both lungs that can cause coughing, fever, shortness of breath, and chest pain.",
        "care": "If you are experiencing symptoms of pneumonia, it is important to seek medical attention immediately. Treatment may include antibiotics, cough medicine, and other medications to help manage symptoms.",
        "prevention": "Preventing pneumonia involves practicing good hygiene, such as washing your hands regularly, avoiding close contact with people who are sick, and getting vaccinated.",
        "motivation": "Remember, taking preventative measures to protect yourself from pneumonia is crucial to your health. Don't hesitate to speak with your healthcare provider about ways to reduce your risk of developing pneumonia."
    }


};

// Helper function to generate the impression section
const generateImpression = (results) => {
    // Sort the results by probability in descending order
    const sortedResults = Object.entries(results).sort(([, a], [, b]) => b - a);

    // Get the most likely diagnosis
    const [mostLikelyDiagnosis, probability] = sortedResults[0];

    // Generate the impression based on the most likely diagnosis and probability
    let impression = '';
    if (probability >= 0.9) {
        impression = `The chest x-ray shows evidence of ${mostLikelyDiagnosis} with a high degree of confidence.`;
    } else if (probability >= 0.7) {
        impression = `The chest x-ray suggests ${mostLikelyDiagnosis} with a moderate degree of confidence.`;
    } else if (probability >= 0.5) {
        impression = `The chest x-ray shows features suggestive of ${mostLikelyDiagnosis}. Further investigation is recommended.`;
    } else {
        impression = `The chest x-ray is within normal limits.`;
    }

    return impression;
};

// Helper function to generate the findings section
const generateFindings = (results) => {
    // Sort the results by probability in descending order
    const sortedResults = Object.entries(results).sort(([, a], [, b]) => b - a);

    // Generate the findings based on each diagnosis and probability
    let findings = {}
    sortedResults.forEach(([diagnosis, probability]) => {
        // findings += `- ${diagnosis}: ${Math.round(probability * 100)}%\n`;
        findings[diagnosis] = Math.round(probability * 100)
    });

    return findings;
};

// Helper function to generate the disease description
const generateDescription = (results) => {
    // Get the most likely diagnosis
    const sortedResults = Object.entries(results).sort(([, a], [, b]) => b - a);
    const [mostLikelyDiagnosis] = sortedResults[0];

    // Generate the description based on the most likely diagnosis
    let description = '';
    switch (mostLikelyDiagnosis) {
        case 'pneumonia':
            description = 'Pneumonia is an infection that causes inflammation in the air sacs in the lungs.';
            break;
        case 'tuberculosis':
            description = 'Tuberculosis (TB) is a bacterial infection that primarily affects the lungs.';
            break;
        case 'lung cancer':
            description = 'Lung cancer is a type of cancer that starts in the cells of the lung.';
            break;
        case 'pleural effusion':
            description = 'Pleural effusion is a buildup of fluid in the space between the lungs and the chest wall.';
            break;
        default:
            description = '';
    }

    return description;
};

const getMostLikelyDiagnoses = (results) => {
    const sortedResults = Object.entries(results).sort(([, a], [, b]) => b - a);
    const [mostLikelyDiagnosis] = sortedResults[0];
    return mostLikelyDiagnosis;
}
const MedicalReport = ({ }) => {
    const location = useLocation();
    const { results, xray } = location.state;

    const mostLikelyDiagnosis = getMostLikelyDiagnoses(results);
    const diseaseDetails = diseaseDescriptions[mostLikelyDiagnosis];
    const findings = generateFindings(results);
    const handlePrint = () => {
        window.print();
    }

    return (
        <div className="medical-report">
            <Button variant="secondary" onClick={handlePrint}>Print Report</Button>

            <Container>
                <Card className="mt-4">
                    <Card.Header>
                        <h1>InsightXray Radiology Report</h1>
                        <p>Report Date: {new Date().toLocaleDateString()}</p>
                    </Card.Header>
                    <Card.Body>
                        <Row>
                            <Col md={4} className="text-start">
                            <Card.Title>Impression</Card.Title>
                            </Col>
                            <Col md={8} className="text-start">
                            {generateImpression(results)}
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col md={4} className="text-start">
                            <Card.Title>Xray</Card.Title>
                            </Col>
                            <Col md={8} className="text-start">
                            <Container>
                                <Row>
                                    <Col>
                                        <Image src={URL.createObjectURL(xray)} alt="uploaded-xray" fluid />
                                    </Col>
                                </Row>
                            </Container>
                            </Col>
                        </Row>
                        <hr/>
                        <Row>
                            <Col md={4} className="text-start">
                            <Card.Title>Findings</Card.Title>
                            </Col>
                            <Col md={8} className="text-start">
                            <Table striped bordered hover responsive>
                                <thead>
                                    <tr>
                                        <th>Diagnosis</th>
                                        <th>Probability</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(findings).map(([key, value]) => (
                                        value>=30 && 
                                        <tr key={key}>
                                            <td>{key}</td>
                                            <td>{value} %</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            </Col>
                        </Row>
                        <hr/>
                        <Container>
                            <hr/>
                            <Row>
                                <Col md={4} className="text-start">
                                    <Card.Title>Diagnosis</Card.Title>
                                </Col>
                                <Col md={8} className="text-start">
                                    {diseaseDetails.description}
                                </Col>
                            </Row>
                            <hr/>
                            <Row>
                                <Col md={4} className="text-start">
                                    <Card.Title className=''>Care</Card.Title>
                                </Col>
                                <Col md={8} className="text-start">
                                    {diseaseDetails.care}
                                </Col>
                            </Row>
                            <hr/>
                            <Row>
                                <Col md={4} className="text-start">
                                    <Card.Title className=''>Prevention</Card.Title>
                                </Col>
                                <Col md={8} className="text-start">
                                    {diseaseDetails.prevention}
                                </Col>
                            </Row>
                            <hr/>
                            <Row className='text-left'>
                                <Col md={4} className="text-start">
                                    <Card.Title>Positive Outlook</Card.Title>
                                </Col>
                                <Col md={8} className="text-start">
                                    {diseaseDetails.motivation}
                                </Col>
                            </Row>
                            <hr/>
                        </Container>

                    </Card.Body>
                    <Card.Footer>
                        <p>This report is not a substitute for clinical judgment and is intended for use by qualified medical personnel only.</p>
                    </Card.Footer>
                </Card>
            </Container>
        </div>
    );

    // return (

    //     <div className="medical-report">
    //     {console.log("results ; ",results,"xray: ",xray)}
    //       {/* Report header */}
    //       <button onClick={handlePrint}>Print Report</button>
    //       <div className="report-header">
    //         <h1>Chest X-Ray Report</h1>
    //         <tr>
    //             <td>xray</td>
    //             <td>
                // {xray && (
                // <div>
                //     <img src={URL.createObjectURL(xray)} alt="uploaded-xray" />
                // </div>
                // )}
    //             </td>
    //         </tr>
    //         <p>Report Date: {new Date().toLocaleDateString()}</p>
    //       </div>

    //       {/* Report body */}
    //       <div className="report-body">
    //         <h2>Impression</h2>
    //         <p>{generateImpression(results)}</p>

    //         <h2>Findings</h2>
    //         <p>{generateFindings(results)}</p>

    //         {console.log(mostLikelyDiagnosis,diseaseDetails)}


    //         <tr>
    //             <td><b>What is {mostLikelyDiagnosis}?</b></td>
    //             <td>
    //                 {diseaseDetails.description}
    //             </td>
    //         </tr>
    //         <hr/>
    //         <tr>
    //             <td><b>What care needs to be taken : </b></td>
    //             <td>
    //                 {diseaseDetails.care}
    //             </td>
    //         </tr>
    //         <hr/>
    //         <tr>
    //             <td><b>Prevention for future : </b></td>
    //             <td>
    //                 {diseaseDetails.prevention}
    //             </td>
    //         </tr>
    //         <hr/>
    //         <tr>
    //             <td><b>Positive Outlook : </b></td>
    //             <td>
    //                 {diseaseDetails.motivation}
    //             </td>
    //         </tr>
    //       </div>

    //       {/* Report footer */}
    //       <div className="report-footer">
    //         <p>
    //           This report is not a substitute for clinical judgment and is intended for use by qualified medical personnel only.
    //         </p>
    //       </div>
    //     </div>
    //   );

}
export default MedicalReport;
