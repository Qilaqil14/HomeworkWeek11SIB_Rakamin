const database = require('../config/database')

class Todo {
  static create({ title }) {
    return database.query("INSERT INTO todo (title) VALUES ($1) RETURNING *", [title]
      );
  }
  static findById(id) {
    return database.query(
      "SELECT * FROM todo WHERE id = $1 AND is_deleted = false",
      [id]
    );
  }
  static findAll() {
    return database.query("SELECT * FROM todo WHERE is_deleted = false");
  }
  static delete(id) {
    return database.query("UPDATE todo SET is_deleted = true WHERE id = $1", [
      id,
    ]);
  }
}

module.exports = Todo;
