from django.db import models


class Evento(models.Model):
    albumId = models.IntegerField()
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=200)
    url = models.URLField()
    thumbnailUrl = models.URLField()

    def __str__(self):
        return self.title
