const { v4: uuidv4 } = require('uuid');
// const Todo = require('../models/mongoose/Todo');
const Model = require('../models/sequelize');

module.exports = class TodoService {
  /**
   *
   * @param {string} description The description of the Todo
   * @param {number} priority Specify its priority
   */
  static async createTodo(description, priority) {
    // let newTodo = new Todo({
    //   uniqueId: uuidv4(),
    //   description,
    //   isCompleted: false,
    //   priority
    // });

    // return newTodo.save();
try {
    let newTodo = Model.Todo.create({
      uniqueid: uuidv4(),
      description: description,
      iscompleted: false,
    });
return newTodo;
  }
catch(err){
  console.log(err.message);
}
  }
  /**
   *
   * @description Returns all todos created on the system
   */
  static async getAllTodos() {
   let EveryThing = await Model.Todo.findAll();
return EveryThing;

  }

  static async readToDo(id) {
    let todoId = id
  let foundTodo = await Model.Todo.findAll({  where: {uniqueid: todoId}})

   return foundTodo;
  }

    //  }) => todo.uniqueId == todoId);

    
  static async deleteTodos(id) {
    let todoId = id

let deletedTodos = await Model .Todo.destroy({
  where: {
    uniqueid: todoId

  }
});
return deletedTodos;
// findOneAndDelete((todo) => todo.uniqueId == todoId)

  //  )
    // Return allToDos;
    // SELECT * FROM newTodo;
    


    
  // return Todo.find().sort({ description: 1 });
    // return Model.Todo.query(
    
  

  /**
   *
   * @description Returns a specific todo by its unique id
   * @param {string} id means Todo unique id
   */
  //static async getTodoById(id) {
    //return Model Todo.query(
      
    //)
 // }

  /**
   *
   * @description Delete a specific todo by its unique id
   * @param {string} id means Todo unique id
   */
//   static async deleteTodoById(id) {
//     return Model.Todo.query(
//     `DELETE FROM todos WHERE id=?`, 
//     )
//     //return Todo.findOneAndRemove({ uniqueId: id, useFindModify:true });
//   }
// };

// job queue


// const { v4: uuidv4 } = require('uuid');
// // const Todo = require('../models/mongoose/Todo');
// const model = require('../models/sequelize');

// module.exports = class TodoService {
//   /**
//    *
//    * @param {string} description The description of the Todo
//    */
//   static async createTodo(description) {
//     // let newTodo = new Todo()
//     // newTodo.uniqueId = uuidv4()
//     // newTodo.description = description

//     // newTodo.save()

//     let newTodo = new Todo({
//       uniqueId: uuidv4(),
//       description: description,
//       isCompleted: false
//     });

//     // let newTodo = {
//     //   uniqueId: uuidv4(),
//     //   description: description,
//     //   isCompleted: false
//     // }


//     return newTodo.save();
//   }
  
//   /**
//    *
//    * @description Returns all todos created on the system
//    */
//   static async getAllTodos() {
//     return Todo.find().sort({ description: 1 });
//   }


// // job queue

// static async readToDo(id) {
//   // let foundTodo = await Todo.findById((todo) => todo.uniqueId == todoId);
//  // return foundTodo.findById();
//  return Todo.findOne({ uniqueId: id });
// }


//   static async deleteTodos(id) {
//    // let foundTodo = await Todo.findOneAndDelete((todo) => todo.uniqueId == todoId)
//    // let indexofFoundToDo = Todo.indexof(foundTodo);
//    // if (indexofFoundToDo != -1){
//     //  Todo.splice(indexofFoundToDo,1);
//         //return foundTodo.findOneAndDelete()

//     return Todo.findOneAndRemove({ uniqueId: id, UseFindModify:true });
//     }
// }
  
  }
}