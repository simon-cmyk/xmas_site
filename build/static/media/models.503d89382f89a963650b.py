from django.db import models

class AdventCalendar(models.Model):
    day = models.PositiveIntegerField(unique=True)
    answer = models.PositiveIntegerField(default=1)
    question = models.TextField()
    alternative1 = models.CharField(max_length=100)
    alternative2 = models.CharField(max_length=100)
    alternative3 = models.CharField(max_length=100)

    def __str__(self):
        return f"Day {self.day}: {self.question}"
