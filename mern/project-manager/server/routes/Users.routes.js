const userCtl = require('../controllers/Users.controller')



module.exports = app => {
    app.post('/api/users', userCtl.register);
    app.post('/api/users/login', userCtl.login)
    app.delete('/api/users/logout', userCtl.logout)
}

