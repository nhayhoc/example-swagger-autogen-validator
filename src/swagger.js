const swaggerAutogen = require("swagger-autogen-validator")();

const doc = {
  info: {
    title: "My API",
    description: "Description",
  },
  host: process.env.SWAGGER_HOST || "localhost:3000",
  schemes: [process.env.SWAGGER_HOST ? "https" : "http"],
};

const outputFile = "./src/swaggerExport/swagger_output";
const endpointsFiles = ["./src/endpoints.js"];

swaggerAutogen({ outputFile, endpointsFiles, doc }).then(() => {
  require("./index");
});
