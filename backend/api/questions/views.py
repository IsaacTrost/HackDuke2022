from re import A
from django.shortcuts import render

import datetime
from questions.models import UserModel, QuestionModel, AnswerModel
from rest_framework import viewsets
from rest_framework.decorators import action
from questions.serializers import UserSerializer, QuestionSerializer, AnswerSerializer
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.core import serializers

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

    @action(methods=["get"], detail=False)
    def daily_question(self, request):
        queryset = QuestionModel.objects.all()
        return Response(queryset.last().question)
    


class AnswerViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows answers to be viewed or edited.
    """
    queryset = AnswerModel.objects.all()
    serializer_class = AnswerSerializer

    @action(methods=["get"], detail=False)
    def all_daily_answers(self, request):
        today = datetime.datetime.today()
        queryset = AnswerModel.objects.filter(date__year=today.year, date__month=today.month, date__day=today.day).values()
        return Response({"questions": list(queryset)})

