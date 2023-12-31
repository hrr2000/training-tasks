# Generated by Django 4.0.4 on 2022-06-05 18:00

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('ecommerce', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='productsale',
            name='status',
            field=models.CharField(choices=[('C', 'Cart'), ('S', 'Sold')], default='C', max_length=1),
        ),
        migrations.AlterField(
            model_name='productimage',
            name='product',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='ecommerce.product'),
        ),
    ]
