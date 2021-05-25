module.exports.addnoticia = (app, req, res) => {
    return res.render("admin/form_add_noticia", { validacao: {}, noticia: {}})
}

module.exports.noticias_salvar = (app, req, res) => {
    const noticia = req.body

    req.assert('titulo','Título é obrigatório').notEmpty()
    req.assert('resumo','Resumo é obrigatório').notEmpty()
    req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10, 100)
    req.assert('autor','Autor é obrigatório').notEmpty()
    req.assert('data_noticia','Data é obrigatório').notEmpty()
    req.assert('noticia','Noticia é obrigatório').notEmpty()

    const erros = req.validationErrors()

    if(erros){

        res.render("admin/form_add_noticia", { validacao: erros, noticia: noticia })

        return
    }

    const connection = app.config.dbConnection()
    const NoticiasDAO = new app.app.models.NoticiasDAO(connection)

    NoticiasDAO.salvarNoticia(noticia, (error, result) => {
                        
        error ? console.log(error) : res.redirect('/noticias')

    })
}