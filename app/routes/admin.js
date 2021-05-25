module.exports = (app) => {
    app.get('/addnoticia', (req, res) => {
        app.app.controllers.admin.addnoticia(app, req, res)
    })
    app.post('/noticias/salvar', (req, res) => {
        app.app.controllers.admin.noticias_salvar(app, req, res)
    })
}