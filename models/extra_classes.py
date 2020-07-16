from odoo import api, fields, models


class ProductFeatures(models.Model):
    _name = 'motion.product_feature'

    name = fields.Char(string="Caracteristica")


class ProductSupport(models.Model):
    _name = 'motion.product_support'

    name = fields.Char(string="Soporte")


class ProductParameter(models.Model):
    _name = 'motion.product_parameter'

    name = fields.Char(string="Parametro")
    desc = fields.Text(string="Descripcion")
    unidad = fields.Char(string="Unidad de medida")
