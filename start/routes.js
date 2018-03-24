'use strict'


const Route = use('Route')

Route.on('/').render('welcome')

Route.get('/auth/register', 'Auth/RegisterController.index')
     .as('auth.register')
