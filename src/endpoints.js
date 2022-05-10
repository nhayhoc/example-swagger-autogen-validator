module.exports = function (app) {
  app.use("/api/v1/items", require("./items/router"));
  app.use(ErrorHandler);
};

function ErrorHandler(err, req, res, next) {
  console.error(err);
  /* #swagger.responses[500] = { 
              schema: {error: "Server Error", id: 'xxxxx'},
              description: 'Server Error' 
   */
  res.status(500).json({ error: "Server Error", id: "randomidhere" });
}
