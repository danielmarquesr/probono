'use strict';
module.exports = (sequelize, DataTypes) => {
  const Lawyer = sequelize.define('Lawyer', {
    cna: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING
    }
  }, {});
  Lawyer.associate = (models) => {
    Lawyer.belongsTo(models.User, { foreignKey: 'userId', as: 'user' });
  };
  return Lawyer;
};
