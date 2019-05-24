# core/views.py

import logging
from django.contrib.auth import get_user_model
from rest_framework import viewsets

from rest_framework.mixins import CreateModelMixin
from rest_framework.permissions import AllowAny

from .serializers import DialogSerializer, PostSerializer, CommentSerializer
from .models import Comment, Post, DialogFlow


class DialogsViewSet(viewsets.ModelViewSet):

    # permission_classes = (AllowAny,)

    serializer_class = DialogSerializer
    queryset = DialogFlow.objects.all()


class PostsViewSet(viewsets.ModelViewSet):

    # permission_classes = (AllowAny,)

    serializer_class = PostSerializer
    queryset = Post.objects.all()


class CommentsViewSet(viewsets.ModelViewSet):

    # permission_classes = (AllowAny,)

    serializer_class = CommentSerializer
    queryset = Comment.objects.all()
