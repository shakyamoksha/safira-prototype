# Generated by Django 3.2 on 2021-04-28 08:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0006_product_image'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='IMAGE',
            new_name='image',
        ),
    ]
