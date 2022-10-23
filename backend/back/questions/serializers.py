from rest_framework import serializers
from questions.models import QuestionModel, AnswerModel, UserModel

class QuestionSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = QuestionModel
        fields = '__all__'

class AnswerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = AnswerModel
        fields = '__all__'

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = UserModel
        fields = '__all__'