exports.getAll = {
  page: "numeric|max:1000",
  limit: "numeric|max:100",
};
exports.addNew = {
  name: "required|string|max:100",
  description: "required|string|max:1000",
};
