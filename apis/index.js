let fs = require("fs");
let path = require("path");
let basename = path.basename(module.filename);
let env = process.env.NODE_ENV || "development";
let config = require(__dirname + "/config.json")[env];
let apis = {};

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function(file) {
    let api = require(path.join(__dirname, file));
    let newapi = new api(config);
    apis[newapi._name] = newapi
  });
module.exports = apis;
