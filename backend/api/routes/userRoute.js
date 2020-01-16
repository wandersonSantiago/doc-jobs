const admin = require('../../config/admin')

module.exports = app => {
    
    app.route('/users')
        .all(app.config.passport.authenticate())
        .post(admin(app.api.service.userService.save))
        .get(admin(app.api.service.userService.get))

    app.route('/users/:id')
        .all(app.config.passport.authenticate())
        .put(admin(app.api.service.userService.save))
        .get(admin(app.api.service.userService.getById))
        .delete(admin(app.api.service.userService.remove))
}