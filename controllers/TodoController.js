const TodoService = require('../services/TodoService');

module.exports = class TodoController {
  static async createTodo(request, response) {
    try {
      let newTodo = await TodoService.createTodo(request.body.description);

      response.status(201).json({ code: 'SUCCESS', success: newTodo, error: null });
    } catch (error) {
      response
        .status(500)
        .json({ code: 'FAILED', success: null, error: error.message || 'Oops you cannot create todo at the moment' });
    }
  }
  
  static async getAllTodos(request, response) {
    try {
      let sort = request.params.sort
      let allTodos = await TodoService.getAllTodos(sort);

      response.status(201).json({ code: 'SUCCESS', success: allTodos, error: null });
    } catch (error) {
      response
        .status(500)
        .json({ code: 'FAILED', success: null, error: error.message || 'Oops you cannot list all todos at the moment' });
    } 
  }

  static async readToDo(request, response) {
     try{
      let todo =await TodoService.readToDo(request.params.id);
      if (todo){
        response.json({ code: 'SUCCESS', success: todo, error: null });
        } else {
        response.status(404)
        .json({ code: 404, 'TO Do NOT FOUND' : 'success', 'Nothing': {}, 'error': true})
      }
    }
    catch(err){
      res.status(500).json({"code" : 500, "message" : "Failed", "error": err.message || "ooopsss... Something terribly went wrong"})
    }
  }

  static async deleteTodos(request, response) {
    try {
    let deletedTodo = await TodoService.deleteTodos(request.params.id);
    if (deletedTodo) {
      response.status(201).json({'code': 'SUCESS', 'success': deletedTodo, 'error': null})
    } else {
      response.status(404)
      .json({'code': 'NOT FOUND', 'success': {}, 'error': true});
    }
  }
  catch(err){
    res.status(500).json({"code" : 500, "message" : "Failed", "error": err.message || "ooopsss... Something terribly went wrong"})
  }
}
}

 // static async sortTodos
//};
//};
