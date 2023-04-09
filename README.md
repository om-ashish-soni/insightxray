# InsightXray

## Try live at : [InsightXray Live](http://34.93.165.201:3000/)

## demo video : [link to the demo video](https://drive.google.com/file/d/1QNS6m7TY9-orKfQkQfYS-0UD5POML9bQ/view?usp=share_link)

# X-Ray Classification Frontend

This is the frontend component of the X-Ray project, which allows users to upload chest X-ray images and receive predictions of COVID-19, pneumonia, and normal status using a deep learning model.

## Installation

To install and run the X-Ray Frontend locally, follow these steps:

1. Clone this repository to your local machine.
2. Install the necessary dependencies by running `npm install`.
3. Start the development server by running `npm start`.

The frontend should now be accessible in your browser at `http://localhost:3000/`.

## Usage

Once the development server is running, you can use the X-Ray Frontend to upload an image and receive predictions. To do this, follow these steps:

1. Click on the "Choose File" button and select a chest X-ray image in either JPEG or PNG format.
2. Click on the "Upload" button to submit the image to the backend API.
3. Wait for the model to make predictions and for the results to be displayed on the page.

## Configuration

The X-Ray Frontend is designed to work with the X-Ray API, which should be running at `http://localhost:8000/xray/` by default. If you need to change the URL of the API endpoint, you can modify the `API_URL` variable in the `src/App.js` file.

# XRay classification backend

This project provides an API for classifying XRay images into three categories: Normal, Pneumonia, COVID-19. It is built using Django and PyTorch and uses a deep learning model trained on the [ChestXRay14](https://arxiv.org/abs/1705.02315) dataset.

## Getting Started

To get started with this project, clone the repository and navigate to the project directory.

```bash
git clone https://github.com/om-ashish-soni/chest-xray-to-desc-gfg-hackathon.git
cd xray-api
```

## Installing Dependencies

To install the dependencies required to run the API, run the following command:

```bash
pip install -r requirements.txt
```

## Running the Server

To run the server, run the following command:

```bash
python manage.py runserver
```

## Testing the API

To test the API, you can use a tool like Thunder Client or Postman to make requests to the server. The server has one endpoint at /xray/ that accepts POST requests with a file parameter that contains an XRay image file. The API will return a JSON response with the predicted class and probability.
Deploying the API

To deploy the API, you can follow the instructions in the Django documentation.


## Credits

This project was created by Om Ashishkumar Soni, Het Patel, Deep Patel , Rinil Parmar  as a part of the X-Ray project, which was developed during the GeeksForGeeks cloud india hackathon course at Dharmsinh Desai University.
