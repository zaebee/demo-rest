
# core/models.py

from django.db import models
from django.contrib.auth import get_user_model
from django.utils.translation import ugettext_lazy as _

from django.contrib.postgres.fields import JSONField
from easy_thumbnails.fields import ThumbnailerField


class DialogFlow(models.Model):
    DIFFICULTY_LEVELS = (
        ('Easy', 'Easy'),
        ('Medium', 'Medium'),
        ('Hard', 'Hard'),
    )
    name = models.CharField(max_length=120)
    session_id = models.CharField(max_length=120)
    picture = models.FileField(blank=True, null=True)

    context = models.TextField()
    difficulty = models.CharField(choices=DIFFICULTY_LEVELS, max_length=10)

    created_at = models.DateTimeField(_('Added at'), auto_now_add=True)
    updateed_at = models.DateTimeField(_('Updated at'), auto_now=True)

    def __str__(self):
        return "Dialog for {}".format(self.session)


class Post(models.Model):
    title = models.CharField(max_length=120)
    content = models.CharField(max_length=400)
    picture = ThumbnailerField(_('Main image'),
            max_length=200,
            upload_to='pictures/')
    author = models.ForeignKey(get_user_model(),
            related_name='posts',
            on_delete=models.CASCADE)

    date_added = models.DateTimeField(_(u'Date Added'), auto_now_add=True)
    date_updated = models.DateTimeField(_(u'Date Updated'), auto_now=True)

    def __str__(self):
        return "Post {}".format(self.title)


class Comment(models.Model):
    text = models.CharField(max_length=120)
    author = models.ForeignKey(get_user_model(),
            related_name='comments',
            on_delete=models.CASCADE)
    post = models.ForeignKey(Post,
            related_name='comments',
            on_delete=models.CASCADE)

    date_added = models.DateTimeField(_(u'Date Added'), auto_now_add=True)
    date_updated = models.DateTimeField(_(u'Date Updated'), auto_now=True)

    def __str__(self):
        return "Comment {}".format(self.text)
