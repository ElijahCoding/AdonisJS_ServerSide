'use strict'

const Post = use('App/Models/Post')

class HomeController {

  async index ({ view, request, response }) {
    let posts = await Post.query()
        .with('tag')
        .with('user')
        .whereNull('parent_id')
        .orderBy('last_reply_at', 'desc')
        .fetch()


    console.log(posts.toJSON())
    return view.render('index', {
      posts
    })
  }
}

module.exports = HomeController
