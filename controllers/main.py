# -*- coding: utf-8 -*-

from collections import OrderedDict
from operator import itemgetter
from wialon import Wialon, WialonError
import requests
import datetime
import re

import odoo
from odoo import http, _
from odoo.exceptions import ValidationError, AccessError, MissingError, UserError
from odoo.addons.auth_signup.models.res_users import SignupError
from odoo.addons.portal.controllers.portal import CustomerPortal, pager as portal_pager
from odoo.http import content_disposition, Controller, request, route
import locale
from odoo.addons.web.controllers.main import login_and_redirect


class HomePortal(CustomerPortal):
    def _prepare_portal_layout_values(self):
        values = super(HomePortal, self)._prepare_portal_layout_values()
        values.update({
            'msg': 'holaaa',
        })
        return values

    # ------------------------------------------------------------
    # Mi alistamiento
    # ------------------------------------------------------------
    def _home_get_page_view_values(self, **kwargs):
        values = {
            'page_name': 'Bienvenido',
        }
        return self._get_page_view_values(values, 'mis_alistamientos_history', False, **kwargs)

    @http.route(['/'], type='http', auth="public", website=True)
    def portal_home_index(self, **kw):
        values = {
            'inicio': 'yes',
            'page_name': 'Monitoring Innovation | Inicio',
        }
        return request.render("gabosoft_home_portal.portal_my_home", values)

    @http.route(['/productos'], type='http', auth="public", website=True)
    def portal_productos(self, **kw):
        values = {
            'page_name': 'Monitoring Innovation | Productos',
        }
        return request.render("gabosoft_home_portal.productos", values)

    @http.route(['/soluciones'], type='http', auth="public", website=True)
    def portal_soluciones(self, **kw):
        values = {
            'page_name': 'Monitoring Innovation | Soluciones',
        }
        return request.render("gabosoft_home_portal.soluciones", values)

    @http.route(['/hardware'], type='http', auth="public", website=True)
    def portal_hardware(self, **kw):
        values = {
            'inicio': 'yes',
            'page_name': 'Monitoring Innovation | Hardware',
        }
        return request.render("gabosoft_home_portal.hardware", values)

