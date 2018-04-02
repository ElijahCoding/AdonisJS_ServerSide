'use strict'

const { validateAll } = use('Validator')
const Post = use('App/Models/Post')

class UnansweredPostController {
  async index ({ view, request }) {
    let posts = await Post.query()
        .forIndex()
        .doesntHave('replies')
        .paginate(request.input('page', 1), 2)

    return view.render('index', {
      posts
    })
  }
}

module.exports = UnansweredPostController
