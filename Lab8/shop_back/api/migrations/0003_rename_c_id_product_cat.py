# Generated by Django 4.2 on 2023-04-05 11:36

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_product_c_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='c_id',
            new_name='cat',
        ),
    ]
