const router = require('express').Router();
const TodoController = require('../controllers/TodoController');

/**
 * List all todos
 */
router.get('/', (req, res) => {
  TodoController.getAllTodos(req, res)
});

/**
 * Create a Todo - unique id, description, isCompleted // application/json
 * api /todos/
 */
router.post('/', (req, res) => {
  TodoController.createTodo(req, res);
});

/**
 *  Get a Todo by unique id
 */
router.get('/:id', (req, res) => {
  TodoController.readToDo(req, res);
  
  
  //let todoId = req.params.id;

 // let foundTodo = Todo.findById((todo) => todo.uniqueId == todoId);

  //res.json({ code: 'SUCCESS', success: foundTodo, error: null });

  // TODO return a proper response to the user when no todo is found.
});

router.post('/:id', (req, res) => {
  // TODO Implement this route
  TodoController.deleteTodos(req, res);
  res.send('todo deleted');
});

module.exports = router;

// Controller and Service =>
