const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('data_barang', {
    id_dabar: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_jebar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'jenis_barang',
        key: 'id_jebar'
      }
    },
    nama_barang: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'data_barang',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "data_barang_pkey",
        unique: true,
        fields: [
          { name: "id_dabar" },
        ]
      },
    ]
  });
};
