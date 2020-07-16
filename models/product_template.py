# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

from odoo import api, fields, models


class ProductTemplate(models.Model):
    _inherit = 'product.template'

    internal_type = fields.Selection([
        ('producto', 'Producto'),
        ('solucion', 'Solucion nicho'),
        ('hardware', 'Hardware'),
        ('otro', 'Locked'),
    ], string='Tipo (Interno)', default='hardware')