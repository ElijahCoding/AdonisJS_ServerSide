'use strict'

const Post = use('App/Models/Post')
const Tag = use('App/Models/Tag')

class TagPostController {
  async index ({ view, params, request }) {
    const tag = await Tag.query().where('slug', '=', params.slug).firstOrFail()

    let posts = await Post.query()
        .forIndex()
        .where('tag_id', '=', tag.id)
        .paginate(request.input('page', 1), 2)

    return view.render('index', {
      posts
    })
  }
}

module.exports = TagPostController
