if (process.env.NODE_ENV === "production") {
  //Return the prod set of keys
} else {
  //Return the dev set of keys
  module.exports = require("./dev");
}
