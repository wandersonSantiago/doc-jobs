const admin = require('../../config/admin')

module.exports = app => {


    app.route('/articles')
        .all(app.config.passport.authenticate())
        .get(admin(app.api.service.articleService.get))
        .post(admin(app.api.service.articleService.save))

    app.route('/articles/:id')
        .all(app.config.passport.authenticate())
        .get(app.api.service.articleService.getById)
        .put(admin(app.api.service.articleService.save))
        .delete(admin(app.api.service.articleService.remove))

    app.route('/categories/:id/articles')
        .all(app.config.passport.authenticate())
        .get(app.api.service.articleService.getByCategory)
}