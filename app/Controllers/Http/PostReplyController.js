'use strict'

const { validateAll } = use('Validator')
const Post = use('App/Models/Post')

class PostReplyController {
  async store ({ request, response, session, auth, params }) {
    let post = await Post.query()
        .where('slug', '=', params.slug)
        .firstOrFail()

    const { body } = request.all()

    const rules = {
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

module.exports = PostReplyController
