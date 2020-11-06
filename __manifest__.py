{
    'name' : 'Home Portal Template',
    'summary' : 'Visualize enlistments into portal ',
    'description' : """
   THIS MODULE ADDS home VISUALIZATION OF WEBSITE
    """,
    'version': '1.0.1',
    'category': 'HOME WEBSITE MAGNAMENT',
    'author': 'gabriel pabon',
    'website': 'https://www.almightycs.com',
    'license': 'OPL-1',
    'depends': ['portal'],
    'data': [
        'views/template.xml',
        'security/ir.model.access.csv',
    ],
    'installable': True,
    'application': True,
    'sequence': 1,
    'price': 300,
    'currency': 'EUR',
}
