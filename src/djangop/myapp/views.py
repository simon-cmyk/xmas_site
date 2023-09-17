from django.shortcuts import render
from django.http import JsonResponse
from .models import AdventCalendar

def get_advent_data(request, day):
    try:
        data = AdventCalendar.objects.get(day=day)
        response_data = {
            'question': data.question,
            'alternative1': data.alternative1,
            'alternative2': data.alternative2,
            'alternative3': data.alternative3,
        }
        return JsonResponse(response_data)
    except AdventCalendar.DoesNotExist:
        return JsonResponse({'error': f'No data found for day {day}'}, status=404)

