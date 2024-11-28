from django.contrib import admin

from .models import Employee, Applications, Services
# Register your models here.

admin.site.register(Employee)
admin.site.register(Applications)
admin.site.register(Services)