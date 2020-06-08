
module.exports = (sequelize, DataTypes) => {
  const Lawyer = sequelize.define('Lawyer', {
    cna: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isNumeric: true,
      },
    },
  }, {});
  Lawyer.associate = (models) => {
    Lawyer.belongsTo(models.User, { foreignKey: 'userId' });
    Lawyer.hasMany(models.Lawsuit, { foreignKey: 'lawyerId' });
    Lawyer.hasMany(models.Translation, { foreignKey: 'lawyerId' });
  };
  return Lawyer;
};
