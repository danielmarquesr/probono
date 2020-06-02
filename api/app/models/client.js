'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    cpf: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isNumeric: true
      }
    }
  }, {});
  Client.associate = (models) => {
    Client.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Client;
};
