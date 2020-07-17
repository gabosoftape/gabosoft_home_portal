# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

from odoo import api, fields, models


class ProductTemplate(models.Model):
    _inherit = 'product.template'

    internal_type = fields.Selection([
        ('producto', 'Producto'),
        ('solucion', 'Solucion nicho'),
        ('hardware', 'Hardware'),
        ('otro', 'Otro'),
    ], string='Tipo (Interno)', default='hardware')
    internal_category = fields.Many2one('motion.hardware_category', string="Categoria (Hardware)")
    feature_ids = fields.Many2many("motion.product_feature", string='Caracteristicas')
    support_ids = fields.Many2many("motion.product_support", string='Soporte')
    parameter_ids = fields.Many2many("motion.product_parameter", string='Parametros')
    specification = fields.Text('Especificaciones', default="")
    image_link = fields.Char("Link Imagen")
