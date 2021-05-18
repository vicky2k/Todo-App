const rateLimit = require("express-rate-limit");

const bodyParser = require("body-parser")
const path = require("path")



module.exports = (app) => {
    
    // TODO add a rate limiter to this application 

    
    const limiter = rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100 // limit each IP to 100 requests per windowMs
      });
      
      //  apply to all requests
      app.use(limiter);

    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());

    // Setup Ejs Template
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, '../app'));

}