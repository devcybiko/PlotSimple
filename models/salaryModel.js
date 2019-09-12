module.exports = function (sequelize, DataTypes) {
    var Salary = sequelize.define("Salary", {
        yearID: { type: DataTypes.NUMBER },
        teamID: { type: DataTypes.NUMBER },
        lgID: { type: DataTypes.NUMBER },
        playerID: { type: DataTypes.NUMBER },
        salary: { type: DataTypes.NUMBER }
    });
    return Salary;
};
