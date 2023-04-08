# Chest XRay Image Classification

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
