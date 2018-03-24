'use strict'

const { validateAll } = use('Validator')

class RegisterController {
  index ({ view }) {
    return view.render('auth.register')
  }

  async register ({ request }) {
    const { email, username, password } = request.all()

    const rules = {
      email: 'required|email|unique:users,email',
      username: 'reuquired|unique:users,username',
      password: 'required'
    }

    const validation = await validateAll(request.all(), rules)

    return validation.fails()
  }
}

module.exports = RegisterController
