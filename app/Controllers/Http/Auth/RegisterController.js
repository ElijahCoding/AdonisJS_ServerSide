'use strict'

class RegisterController {
  index ({ view }) {
    return view.render('auth.register')
  }
}

module.exports = RegisterController
