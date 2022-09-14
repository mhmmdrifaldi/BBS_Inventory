const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('barang_keluar', {
    id_barkel: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_dabar: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'data_barang',
        key: 'id_dabar'
      }
    },
    nama_barang: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    jenis_barang: {
      type: DataTypes.STRING(15),
      allowNull: true
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date_barkel: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'barang_keluar',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "barang_keluar_pkey",
        unique: true,
        fields: [
          { name: "id_barkel" },
        ]
      },
    ]
  });
};
