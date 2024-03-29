class NoticiasDAO {
    constructor(connection) {
        this._connection = connection
    }
    getNoticias(callback) {
        this._connection.query('select * from noticias order by data_criacao desc', callback)
    }
    getNoticia(id_noticia, callback) {
        this._connection.query('select * from noticias where id_noticia = ' + id_noticia.id_noticia, callback)
    }
    salvarNoticia(noticia, callback) {
        console.log(noticia)
        this._connection.query('insert into noticias set ?', noticia, callback)
    }
    get5UltimasNoticias(callback) {
        this._connection.query('select * from noticias order by data_criacao desc limit 5', callback)
    }
}

module.exports = () => {

    return NoticiasDAO
}