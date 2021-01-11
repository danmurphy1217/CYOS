module.exports = (app) => {
    app.get("/", async function (request, response) {
        response.status(200).json({
          message: "hello, world"
        })
      })
}