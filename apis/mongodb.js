var mongojs = require("mongojs");

let MongodbConstructor = function (config) {
    this._name = "mongodb";
    this.databaseUrl = config.mongodbConfig.url;
    this.collections = config.mongodbConfig.collections;
    this.db = mongojs(this.databaseUrl, this.collections);
    this.query = (data, context, callback) => {
        this.db[data.collection].find(data.where || {}, data.fields || {}, function (err, found) {
            console.log(err);
            console.log(found);
            if (err) return callback(err, null, context);
            let transformed = [];
            for(let i=0; i<found.length; i++) {
                let row = {_id: found[i]._id};
                for(let key of Object.keys(found[i])) {
                    if (data.fields[key]) row[data.fields[key]] = found[i][key];
                }
                transformed.push(row);
            }
            return callback(null, transformed, context);
        });
    };
};

module.exports = MongodbConstructor;