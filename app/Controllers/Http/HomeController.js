'use strict'

const Post = use('App/Models/Post')

class HomeController {

  async index ({ view, request, response }) {
    let posts = await Post.query()
        .forIndex()
        .fetch()


    console.log(posts.toJSON())
    return view.render('index', {
      posts
    })
  }
}

module.exports = HomeController
