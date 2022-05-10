const swaggerAutogen = require("swagger-autogen-validator")();

const doc = {
  info: {
    title: "My API",
    description: "Description",
  },
};

const outputFile = "./src/swaggerExport/swagger_output";
const endpointsFiles = ["./src/endpoints.js"];

swaggerAutogen({ outputFile, endpointsFiles, doc }).then(() => {
  require("./index");
});
