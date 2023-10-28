const Todo = require('../models/todo')

class TodoRepository {
    static create({ title }) {
        return Todo.create({ title })
    }
    static findById(id) {
        return Todo.findById(id)
    }
    static findAll() {
        return Todo.findAll()
    }
    static delete(id){
        return Todo.delete(id)
    }
}

module.exports = TodoRepository