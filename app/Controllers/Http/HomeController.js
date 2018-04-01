'use strict'

const Post = use('App/Models/Post')

class HomeController {

  async index ({ view, request, response }) {
    let posts = await Post.query()
        .forIndex()
        .paginate(request.input('page', 1), 2)

    console.log(posts.toJSON())

    return view.render('index', {
      posts
    })
  }
}

module.exports = HomeController
