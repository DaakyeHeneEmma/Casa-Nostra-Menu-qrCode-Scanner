from django.db import models

# Create your models here.
class Foods(models.Model):
    name = models.CharField(max_length=100)
    food_type = models.CharField(max_length=20)
    category = models.CharField(max_length=30)