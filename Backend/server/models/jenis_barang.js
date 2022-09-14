const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jenis_barang', {
    id_jebar: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama_jebar: {
      type: DataTypes.STRING(25),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'jenis_barang',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "jenis_barang_pkey",
        unique: true,
        fields: [
          { name: "id_jebar" },
        ]
      },
    ]
  });
};
