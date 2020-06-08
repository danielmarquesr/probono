
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Clients', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    cpf: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING,
    },
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
    },
  }),
  down: (queryInterface) => queryInterface.dropTable('Clients'),
};
