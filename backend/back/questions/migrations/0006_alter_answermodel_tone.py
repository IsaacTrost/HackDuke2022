# Generated by Django 4.1.2 on 2022-10-23 09:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0005_alter_answermodel_tone'),
    ]

    operations = [
        migrations.AlterField(
            model_name='answermodel',
            name='tone',
            field=models.IntegerField(null=True),
        ),
    ]
