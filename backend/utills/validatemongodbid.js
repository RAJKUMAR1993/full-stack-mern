const mongoose = require("mongoose");
const validateMongoDbId = (id) => {
  const isValid = mongoose.Types.ObjectId.isValid(id);
  console.log(isValid);
  if (!isValid) {
    throw new Error("This id is not valid  or not");
  }
};
module.exports = validateMongoDbId;
