const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('barang', {
    id_barang: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama_barang: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    id_jebar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'jenis_barang',
        key: 'id_jebar'
      }
    }
  }, {
    sequelize,
    tableName: 'barang',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "barang_pkey",
        unique: true,
        fields: [
          { name: "id_barang" },
        ]
      },
    ]
  });
};
