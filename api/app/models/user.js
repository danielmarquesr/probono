const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        notEmpty: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  }, {});
  User.associate = (models) => {
    User.hasOne(models.Lawyer, { foreignKey: 'userId' });
    User.hasOne(models.Client, { foreignKey: 'userId' });
  };
  User.beforeCreate((user) => {
    /* eslint no-param-reassign: ["error", { "props": false }] */
    user.password = bcrypt.hashSync(user.password, 10);
  });
  return User;
};
