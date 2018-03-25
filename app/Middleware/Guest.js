'use strict'

class Guest {
  async handle ({ response, request }, next) {

    let authenticated = true

    try {
      authenticated = await auth.check()
    } catch (error) {
      authenticated = false
    }

    if (authenticated) {
      return response.route('home')
    }

    await next()
  }
}

module.exports = Guest
