# Generated by Django 4.2.5 on 2023-09-17 13:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AdventCalendar',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('day', models.PositiveIntegerField(unique=True)),
                ('question', models.TextField()),
                ('alternative1', models.CharField(max_length=100)),
                ('alternative2', models.CharField(max_length=100)),
                ('alternative3', models.CharField(max_length=100)),
            ],
        ),
    ]
