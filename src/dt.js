const path = require("path");

module.exports = ({ file, payload }) => {
  const dtFolder = "dataTransformation";

  const filePath = path.join(dtFolder, file);

  const executedFunction = require(`./${filePath}`);

  return executedFunction(payload);
};
