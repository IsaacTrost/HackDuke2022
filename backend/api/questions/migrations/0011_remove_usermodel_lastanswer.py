# Generated by Django 4.1.2 on 2022-10-23 12:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0010_answermodel_date_answermodel_question'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='usermodel',
            name='lastAnswer',
        ),
    ]
