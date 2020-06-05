module.exports = (sequelize, DataTypes) => {
  const Translation = sequelize.define('Translation', {
    explanation: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    textTarget: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  }, {});
  Translation.associate = function (models) {
    Translation.belongsTo(models.Lawyer, { foreignKey: 'lawyerId' });
    Translation.belongsToMany(models.Progress, { through: 'TranslationProgress', foreignKey: 'translationId' });
  };
  return Translation;
};
