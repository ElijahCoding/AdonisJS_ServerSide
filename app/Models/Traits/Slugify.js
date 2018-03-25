'use strict'

class Slugify {
  register (Model) {
    Model.addHook('afterCreate', (modelInstance) => {
      console.log(modelInstance.id)
    })
  }
}

module.exports = Slugify
