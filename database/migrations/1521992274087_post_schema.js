'use strict'

const Schema = use('Schema')

class PostSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.increments()
      table.string('title')
      table.string('slug').unique()
      table.text('body')
      table.integer('user_id').unsigned().index()
      table.integer('tag_id').unsigned().index()
      table.timestamps()

      table.foreign('user_id').references('users.id').onDelete('cascade')
      table.foreign('tag_id').references('tags.id').onDelete('cascade')
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostSchema
