const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pembeli', {
    id_user: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nama_user: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    alamat: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    date_pembelian: {
      type: DataTypes.DATEONLY,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'pembeli',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pembeli_pkey",
        unique: true,
        fields: [
          { name: "id_user" },
        ]
      },
    ]
  });
};
