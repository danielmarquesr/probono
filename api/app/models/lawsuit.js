
module.exports = (sequelize, DataTypes) => {
  const Lawsuit = sequelize.define('Lawsuit', {
    number: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isAlpha: true,
      },
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true,
      },
    },
  }, {});
  Lawsuit.associate = (models) => {
    Lawsuit.belongsTo(models.Lawyer, { foreignKey: 'lawyerId' });
    Lawsuit.belongsTo(models.Client, { foreignKey: 'clientId' });
    Lawsuit.hasMany(models.Progress, { foreignKey: 'lawsuitId' });
  };
  return Lawsuit;
};
