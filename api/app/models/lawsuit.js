
module.exports = (sequelize, DataTypes) => {
  const Lawsuit = sequelize.define('Lawsuit', {
    number: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isAlpha: true
      }
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    text: {
      allowNull: false,
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true
      }
    }
  }, {});
  Lawsuit.associate = (models) => {
    Lawsuit.belongsTo(models.Lawyer, { foreignKey: 'lawyerId' });
    Lawsuit.belongsTo(models.Client, { foreignKey: 'clientId' });
  };
  return Lawsuit;
};
