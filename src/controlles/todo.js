const TodoRepository = require('../repository/todo')

class TodoControlles {
  static async createTodo(req, res) {
    try {
      const { title } = req.body;
      const todo = await TodoRepository.create({
        title
      });
      res.status(201).json({ message: "Todo Add" });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  static async getTodoId(req, res) {
    try {
      const id = req.params.id;
      const todo = await TodoRepository.findById(id);

      if (todo.rows.length === 0) {
        res.status(404).json({ error: "Movie not found" });
      } else {
        res.json(todo.rows[0]);
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  static async getTodo(req, res) {
    try {
      const todo = await TodoRepository.findAll();
      res.json(todo.rows);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  static async deleteTodo(req, res) {
    try {
      const id = req.params.id;
      const todo = await TodoRepository.delete(id);
      if (todo.rowCount.length === 0) {
        res.status(404).json({ error: "Movie not found" });
      } else {
        res.json({ message: "movie delete Succes" });
      }
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}


module.exports = TodoControlles;
