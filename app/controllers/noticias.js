module.exports.noticia = (app, req, res) => {
    const connection = app.config.dbConnection()
    const NoticiasDAO = new app.app.models.NoticiasDAO(connection)

    const id_noticia = req.query

    NoticiasDAO.getNoticia(id_noticia, (error, result) => {
            
        error ? console.log(error) : res.render("noticias/noticia", {noticia: result})
            
    })
}

module.exports.noticias = (app, req, res) => {
    const connection = app.config.dbConnection()
    const NoticiasDAO = new app.app.models.NoticiasDAO(connection)

    NoticiasDAO.getNoticias((error, result) => {

        error ? console.log(error) : res.render("noticias/noticias", {noticias: result})

    })
}