# Generated by Django 4.1.2 on 2022-10-23 06:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questions', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='answermodel',
            name='tone',
            field=models.IntegerField(default=0),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='questionmodel',
            name='date',
            field=models.DateTimeField(),
        ),
    ]
