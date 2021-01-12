module.exports = (app) => {
    app.post('/auth/login', async function (request, response) {
        response.status(200).json({
            username: request.body.username ?  request.body.username : null,
            password: request.body.password ?  request.body.password : null
        })
    })
}