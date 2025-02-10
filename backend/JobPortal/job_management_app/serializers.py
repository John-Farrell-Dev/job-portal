from rest_framework import serializers

class PostingSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    sitename = serializers.CharField()
    duration = serializers.IntegerField()

class LocationSerializer(serializers.Serializer):
    city = serializers.CharField()
    state = serializers.CharField()
    country = serializers.CharField()

class JobSerializer(serializers.Serializer):
    postings = PostingSerializer(many=True)
    id = serializers.IntegerField()
    req_name = serializers.CharField()
    location = LocationSerializer()
    description = serializers.CharField()
    status = serializers.CharField()