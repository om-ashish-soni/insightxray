from rest_framework import views
from rest_framework.response import Response
from rest_framework.parsers import MultiPartParser, FormParser
from django.http import Http404
from .serializers import XRayImageSerializer
import torchxrayvision as xrv
import skimage, torch, torchvision
# from transformers import pipeline, set_seed


class XRayView(views.APIView):
    parser_classes = [MultiPartParser, FormParser]

    def get(self, request, format=None):
        return Response({'status': 'ok'})

    def post(self, request, format=None):
        serializer = XRayImageSerializer(data=request.data)
        if serializer.is_valid():
            image = serializer.validated_data['image']
            # Prepare the image
            img = skimage.io.imread(image.file)
            img = xrv.datasets.normalize(img, 255)
            img = img.mean(2)[None, ...]

            transform = torchvision.transforms.Compose([xrv.datasets.XRayCenterCrop(), xrv.datasets.XRayResizer(224)])
            img = transform(img)
            img = torch.from_numpy(img)

            # Load model and process image
            model = xrv.models.DenseNet(weights="densenet121-res224-all")
            outputs = model(img[None, ...])

            # Generate description
            op = dict(zip(model.pathologies, outputs[0].detach().numpy()))
            # generator = pipeline('text-generation', model='gpt2')
            # description = generate_description(outputs, model, generator)

            return Response({'description': op})
        return Response(serializer.errors, status=400)


# def generate_description(outputs, model, generator):
#     # Convert the probabilities to a list of (label, probability) pairs
#     labels = model.pathologies
#     probs = outputs[0].detach().numpy()
#     pairs = list(zip(labels, probs))

#     # Sort the pairs by probability (highest to lowest)
#     pairs = sorted(pairs, key=lambda x: x[1], reverse=True)

#     # Create a prompt string with the top 3 labels and their probabilities
#     prompt = f"The most likely diagnoses are {pairs[0][0]} ({pairs[0][1]:.2f}), {pairs[1][0]} ({pairs[1][1]:.2f}), and {pairs[2][0]} ({pairs[2][1]:.2f})."

#     # Generate a description using the language model
#     set_seed(42)  # Set a fixed seed for reproducibility
#     description = generator(prompt, max_length=50, do_sample=True)[0]['generated_text']

#     return description
