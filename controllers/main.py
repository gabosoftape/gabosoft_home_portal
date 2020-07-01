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

    @http.route(['/inicio'], type='http', auth="public", website=True)
    def portal_home_index(self, **kw):
        # try:
        #    appointment_sudo = self._document_check_access('hms.appointment', appointment_id, access_token=access_token)
        # except (AccessError, MissingError):
        #    return request.redirect('/my')

        # values = self._appointment_get_page_view_values(appointment_sudo, access_token, **kw)
        # return request.render("acs_hms_portal.portal_my_appointment", values)
        return request.render("gabosoft_home_portal.portal_my_home")
