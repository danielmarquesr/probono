
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
    Lawyer.belongsToMany(models.Lawsuit, { through: 'LawyerLawsuit', foreignKey: 'lawsuitId' });
  };
  return Lawyer;
};
