'use strict'

class PostController {
  create ({ view }) {
    return view.render('posts.create')
  }
}

module.exports = PostController
