
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Lawsuits', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    number: {
      allowNull: false,
      unique: true,
      type: Sequelize.STRING,
    },
    title: {
      allowNull: false,
      type: Sequelize.STRING,
    },
    text: {
      allowNull: false,
      type: Sequelize.TEXT,
    },
    clientId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'Clients',
        key: 'id'
      }
    },
    lawyerId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'Lawyers',
        key: 'id'
      }
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
  down: (queryInterface) => queryInterface.dropTable('Lawsuits'),
};
