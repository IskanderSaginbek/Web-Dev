from django.urls import path
from . import views

urlpatterns = [
    path('api/companies', views.Companies, name='companies'),
    path('api/companies/<int:id_>', views.CompanyById, name='company'),
    path('api/companies/<int:id_>/vacancies', views.CompanyVacancies, name='company vacancies'),
    path('api/vacancies', views.Vacancies, name='vacancies'),
    path('api/vacancies/<int:id_>', views.VacancyById, name='vacancy'),
    path('api/vacancies/top_ten', views.VacanciesTop, name='top_ten_vacancies'),
]