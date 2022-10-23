from django.shortcuts import render

from questions.models import UserModel, QuestionModel, AnswerModel
from rest_framework import viewsets
from rest_framework import permissions
from questions.serializers import UserSerializer, QuestionSerializer, AnswerSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = UserModel.objects.all()
    serializer_class = UserSerializer


class QuestionViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows questions to be viewed or edited.
    """
    queryset = QuestionModel.objects.all()
    serializer_class = QuestionSerializer

class AnswerViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows answers to be viewed or edited.
    """
    queryset = AnswerModel.objects.all()
    serializer_class = AnswerSerializer