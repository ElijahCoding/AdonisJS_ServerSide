'use strict'

const { validateAll } = use('Validator')

class PostController {
  create ({ view }) {
    return view.render('posts.create')
  }

  async store ({ request, response, session }) {
    const { title, tag, body } = request.all()

    const rules = {
      title: 'required',
      tag: 'required',
      body: 'required'
    }

    const validation = await validateAll(request.all(), rules)

    if (validation.fails()) {
      session.withErrors(validation.messages())
             .flashAll()

    return response.redirect('back')
    }
  }
}

module.exports = PostController
