module.exports.index = (app, req, res) => {
    const connection = app.config.dbConnection()
    const NoticiasDAO = new app.app.models.NoticiasDAO(connection)
    
    NoticiasDAO.get5UltimasNoticias((error, result) => {
        return res.render("home/index", { noticias: result })
    })
}