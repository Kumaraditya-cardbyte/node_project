const {
    createUser,UpdateUser,getAllUser,deleteUser,getUser,updateUser,
} = require('../service/UserService')

module.exports = (router,app) =>{
    router.get('/', app.oauth.authorise(),(req, res) => {
        getAllUser(req, res)
    })
    router.get('/:id', app.oauth.authorise(),(req, res) => {
        getUser(req, res)
    })
    router.post('/', app.oauth.authorise(),(req, res) => {
        createUser(req, res)
    })
    router.put('/:id',app.oauth.authorise(), (req, res) => {
        updateUser(req, res)
    })
    router.delete('/:id',app.oauth.authorise(), (req, res) => {
        deleteUser(req, res)
    })
    return router;
}



