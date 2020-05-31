'use strict';
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define('Client', {
    cpf: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    }
  }, {});
  Client.associate = function (models) {
    Client.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };
  return Client;
};
