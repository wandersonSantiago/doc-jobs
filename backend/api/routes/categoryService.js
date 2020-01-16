const admin = require('../../config/admin')

module.exports = app => {

    
    app.route('/categories')
        .all(app.config.passport.authenticate())
        .get(admin(app.api.service.categoryService.get))
        .post(admin(app.api.service.categoryService.save))

    app.route('/categories/tree')
        .all(app.config.passport.authenticate())
        .get(app.api.service.categoryService.getTree)

    app.route('/categories/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.service.categoryService.getById)
        .put(admin(app.api.service.categoryService.save))
        .delete(admin(app.api.service.categoryService.remove))

   
}