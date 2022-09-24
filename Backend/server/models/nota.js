const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nota', {
    id_nota: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    date_nota: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'nota',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "nota_pkey",
        unique: true,
        fields: [
          { name: "id_nota" },
        ]
      },
    ]
  });
};
