'use strict'


const Route = use('Route')

Route.get('/', 'HomeController.index').as('home')

Route.get('/posts/:slug', 'PostController.show')
     .as('posts.show')

Route.get('/posts/create', 'PostController.create')
     .as('posts.create')
     .middleware(['auth'])

Route.post('/posts', 'PostController.store')
     .as('posts.store')
     .middleware(['auth'])

Route.get('/auth/register', 'Auth/RegisterController.index')
     .as('auth.register')
     .middleware(['guest'])

Route.post('/auth/register', 'Auth/RegisterController.register')
     .as('auth.register')
     .middleware(['guest'])

Route.get('/auth/login', 'Auth/LoginController.index')
     .as('auth.login')
     .middleware(['guest'])

Route.post('/auth/login', 'Auth/LoginController.login')
     .as('auth.login')
     .middleware(['guest'])
