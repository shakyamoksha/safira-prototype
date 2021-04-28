# Generated by Django 3.2 on 2021-04-28 07:12

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Rewiew',
            fields=[
                ('NAME', models.CharField(blank=True, max_length=200, null=True)),
                ('RATING', models.IntegerField(blank=True, default=0, null=True)),
                ('COMMENT', models.TextField(blank=True, null=True)),
                ('ID', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('PRODUCT', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.product')),
                ('USER', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
