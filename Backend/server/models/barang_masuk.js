const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('barang_masuk', {
    id_barma: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    barma_id_dabar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'data_barang',
        key: 'id_dabar'
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date_barma: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'barang_masuk',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_barang_masuk",
        unique: true,
        fields: [
          { name: "id_barma" },
          { name: "barma_id_dabar" },
        ]
      },
    ]
  });
};
