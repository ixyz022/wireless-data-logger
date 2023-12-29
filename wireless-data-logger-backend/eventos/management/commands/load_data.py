import json
from django.core.management.base import BaseCommand
from eventos.models import Evento


class Command(BaseCommand):
    help = 'Carga datos desde un archivo JSON a la base de datos'

    def handle(self, *args, **kwargs):
        # Ruta actualizada al archivo datos.json
        with open('resources/datos_eventos.json', 'r', encoding='utf-8') as file:
            data = json.load(file)
            for entry in data:
                evento = Evento(
                    albumId=entry['albumId'],
                    title=entry['title'],
                    url=entry['url'],
                    thumbnailUrl=entry['thumbnailUrl']
                )
                evento.save()
        self.stdout.write(self.style.SUCCESS('Datos cargados exitosamente'))
