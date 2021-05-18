const todoRoute = require('./todoRoutes');

const FrontendTodoController = require('../controllers/FrontendTodoController');

module.exports = (app) => {
  app.use('/health', (req, res) => {
    res.send("I'm in a good working condition");
  });

  
  app.use('/api/v1/todos', todoRoute);

  // ('/todos', todoRoute);
  
  app.use('/todos', async (req, res) => {

FrontendTodoController.getAllTodos(req, res);
  });

  app.get('/', (req, res) => {
    console.log(`I go here`);
    res.json({"success": 'You just Ping me !'});
  });
};

//     res.render('index', {todos});

// Route
// middleware use function with route pattern and handler
// http verb of the express function
// middleware use function with route pattern and exported router module


// User Module
// Post Module

// /users => all user
// /users/:id => particular user /users/ade

// /posts => all user
// /posts/:id => particular post
