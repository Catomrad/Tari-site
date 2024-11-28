from django.db import models
from django.core.validators import RegexValidator
# Create your models here.


class Employee(models.Model):
    name = models.CharField(max_length=32, blank=False, null=False)
    job = models.CharField(max_length=32, blank=False, null=False)
    experience = models.CharField(max_length=32, blank=False, null=False)
    photo = models.ImageField(upload_to='img/', null=True, max_length=255)
    description = models.CharField(max_length=255, blank=False, null=False)


class Applications(models.Model):
    name = models.CharField(max_length=32, blank=False, null=False)
    phone_number = models.CharField(
        max_length=20,  # Adjust based on your needs
        validators=[
            RegexValidator(
                regex=r'^\+?1?\d{9,15}$',  # Example regex for international phone numbers
                message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed."
            )
        ]
    )
    description = models.CharField(max_length=255, blank=False, null=False)


class Services(models.Model):
    name = models.CharField(max_length=32, blank=False, null=False)
    image = models.ImageField(upload_to='img/', null=True, max_length=255)
    price = models.IntegerField(null=True, blank=False)

