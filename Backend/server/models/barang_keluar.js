const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('barang_keluar', {
    id_barkel: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    barkel_id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'pembeli',
        key: 'id_user'
      }
    },
    barkel_id_dabar: {
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
    }
  }, {
    sequelize,
    tableName: 'barang_keluar',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "pk_barang_keluar",
        unique: true,
        fields: [
          { name: "id_barkel" },
          { name: "barkel_id_user" },
          { name: "barkel_id_dabar" },
        ]
      },
    ]
  });
};
