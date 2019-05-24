# core/serializers.py

from rest_framework import serializers
from django.contrib.auth import get_user_model

from .models import DialogFlow, Post, Comment


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = get_user_model()
        fields = ['username', 'email', 'id', 'first_name', 'last_name']


class CommentSerializer(serializers.ModelSerializer):

    author = UserSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ['text', 'author', 'post', 'date_added']
        read_only_fields = ('author', 'date_added')

    def create(self, validated_data):
        user = self.context.get('request').user
        comment = Comment(**validated_data)
        comment.author = user
        comment.save()
        return comment


class DialogSerializer(serializers.ModelSerializer):

    class Meta:
        model = DialogFlow
        fields = '__all__'


class PostSerializer(serializers.ModelSerializer):

    comments = CommentSerializer(many=True, read_only=True)

    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'picture', 'comments']
        read_only_fields = ('author',)

    def create(self, validated_data):
        user = self.context.get('request').user
        post = Post(**validated_data)
        post.author = user
        post.save()
        return post
