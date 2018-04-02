'use strict'

const validateAll = use('Validator')

class PostAnswerController {
  async store ({ request, response, auth, params }) {
    const answer_id = request.all()

    let post = await Post.query()
        .where('slug', '=', params.slug)
        .where('user_id', '=', auth.user.id)
        .whereHas('replies', (builder) => {
          builder.where('id', '=', answer_id)
        })
        .firstOrFail()

    const rules = {
      answer_id: 'required|exists:posts,id'
    }

    const validation = await validateAll(request.all(), rules)

    if (validation.fails()) {
      session.withErrors(validation.messages())
             .flashAll()

      return response.redirect('back')
    }

    
  }
}

module.exports = PostAnswerController
