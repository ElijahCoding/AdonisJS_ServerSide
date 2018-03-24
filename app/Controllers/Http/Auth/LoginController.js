'use strict'

const { validateAll } = use('Validator')

class LoginController {
  index ({ view }) {
    return view.render('auth.login')
  }

  login ({ request, response, session }) {
    const { email, password } = request.all()

    const rules = {
      email: 'required|email|unique:users,email',
      password: 'required'
    }

    const validation = await validateAll(request.all(), rules)

    if (validation.fails()) {
      session.withErrors(validation.message)
             .flashAll()
             
      return response.redirect('back')
    }
  }
}

module.exports = LoginController
