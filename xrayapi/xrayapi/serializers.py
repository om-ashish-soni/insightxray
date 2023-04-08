from rest_framework import serializers


class XRayImageSerializer(serializers.Serializer):
    image = serializers.ImageField()
