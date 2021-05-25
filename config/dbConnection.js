const mysql = require('mysql')
const connMySQL = () => {
    
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'Dark@1798',
        database: 'portal_noticias'
    })
    
}
module.exports = () => connMySQL