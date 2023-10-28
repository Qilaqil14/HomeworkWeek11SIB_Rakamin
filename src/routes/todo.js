const router = require("express").Router();
const todoControlles = require("../controlles/todo");


router.post("/", todoControlles.createTodo);
router.get("/:id", todoControlles.getTodoId);
router.get("/", todoControlles.getTodo);
router.delete("/:id", todoControlles.deleteTodo);

module.exports = router;
