'use strict'

class LoginController {
  index ({ view }) {
    return view.render('auth.login')
  }

  login () {

  }
}

module.exports = LoginController
