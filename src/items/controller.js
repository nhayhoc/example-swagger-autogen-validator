const validateRules = require("./validateRules");
const Validator = require("validatorjs");
exports.getAll = (req, res, next) => {
  let { page, limit } = req.query;
  let validation = new Validator({ page, limit }, validateRules.getAll);
  if (validation.fails())
    return res.status(400).json({ error: validation.errors.all() });
  //
  //   let data = ....
  /* #swagger.parameters[200] = {
    schema: { $ref: '#/definitions/UserGetAll' }
  } */
  res.json(data);
};
exports.addNew = (req, res, next) => {
  let { name, description } = req.body;
  /* #swagger.parameters['obj']  = {
    in: 'body',
    schema: { $ref: '#/definitions/UserNewuser' }
  } */

  let validation = new Validator({ name, description }, validateRules.addNew);
  if (validation.fails())
    return res.status(400).json({ error: validation.errors.all() });
  //
  //   let data = ....

  res.json(data);
};
