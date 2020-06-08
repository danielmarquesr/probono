
module.exports = (sequelize, DataTypes) => {
  const Progress = sequelize.define('Progress', {
    description: {
      allowNull: false,
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true,
      },
    },
    date: {
      allowNull: false,
      type: DataTypes.DATE,
      validate: {
        notEmpty: true,
      },
    },
  }, {});
  Progress.associate = (models) => {
    Progress.belongsTo(models.Lawsuit, { foreignKey: 'lawsuitId' });
    Progress.belongsToMany(models.Translation, { through: 'TranslationProgress', foreignKey: 'progressId' });
  };
  return Progress;
};
