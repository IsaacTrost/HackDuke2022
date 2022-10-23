from django.db import models

# Create your models here.

class QuestionModel(models.Model):
    date = models.DateField(blank = False)
    question = models.CharField(max_length = 300, blank = False)

class AnswerModel(models.Model):
    content = models.CharField(max_length = 500, blank=False)

class UserModel(models.Model):
    lastAnswer = models.ForeignKey(AnswerModel, on_delete=models.CASCADE)
    answers = models.ManyToManyField(AnswerModel, related_name='answers')
    macAddress = models.CharField(max_length = 12, blank = False)
