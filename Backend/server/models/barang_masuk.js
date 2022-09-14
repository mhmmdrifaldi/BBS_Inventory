const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('barang_masuk', {
    id_barma: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_barang: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'barang',
        key: 'id_barang'
      }
    },
    nama_barang: {
      type: DataTypes.STRING(50),
      allowNull: true
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
        name: "barang_masuk_pkey",
        unique: true,
        fields: [
          { name: "id_barma" },
        ]
      },
    ]
  });
};
