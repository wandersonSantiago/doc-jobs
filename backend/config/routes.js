const admin = require('./admin')

module.exports = app => {

    app.post('/signup', app.api.service.userService.save)
    app.post('/signin', app.api.auth.signin)
    app.post('/validateToken', app.api.auth.validateToken)    
  
   
}