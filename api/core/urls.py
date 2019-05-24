# core/urls.py
from django.urls import path, include
from rest_framework_jwt.views import obtain_jwt_token
from rest_framework.routers import DefaultRouter

from .views import DialogsViewSet, PostsViewSet, CommentsViewSet


router = DefaultRouter()
router.register(r'dialogs', DialogsViewSet)
router.register(r'posts', PostsViewSet)
router.register(r'comments', CommentsViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('token-auth/', obtain_jwt_token),
    path('rest-auth/', include('rest_auth.urls')),
    path('rest-auth/registration/', include('rest_auth.registration.urls')),

    # path('dialogs/', DialogsViewSet),
    # path('posts/', PostsViewSet)
]

'сколько стоит сайт?'
'сколько стоит лендинг?'
'сколько стоит директ?'
'сайт под ключ'
'сколько нужно часов, для того чтобы сделать систему доступов'
'система доступов на криптокошельках'
'и я так понимаю, нужно описание системы доступов'

"Клиент:"
"спецодежда - комарова"
"чай - магазин кофе и чая вв че"
