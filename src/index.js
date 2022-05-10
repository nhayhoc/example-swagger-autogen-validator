const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const chalk = require("chalk");

const http = require("http");
const fs = require("fs");
const path = require("path");

const { DB_URI, PORT } = process.env;

const app = express();

// body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//cors
const CORS_WHITELIST = ["https://example.domain"];
const corsOptions = {
  origin: function (origin, callback) {
    if (
      !origin ||
      origin.includes("http://localhost") ||
      CORS_WHITELIST.includes(origin)
    ) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors(corsOptions));

//morgan
morgan.format(
  "myformat",
  '[:date[clf]] ":method :url" :status :res[content-length] - :response-time ms'
);
app.use("/api/*", morgan("myformat"));

//swagger ui
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = JSON.parse(
  fs.readFileSync(path.resolve("./src/swaggerExport/swagger_output"))
);

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
//endpoint api
require("./endpoints")(app);

//server
http.createServer(app).listen(PORT, (err) => {
  if (err) throw err;
  console.log(
    `> Server ` + chalk.underline(chalk.blue(`http://localhost:${PORT}`))
  );
  console.log(
    `> Doc ` + chalk.underline(chalk.blue(`http://localhost:${PORT}/doc`))
  );
});
