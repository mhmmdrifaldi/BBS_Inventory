import Sequelize  from "sequelize";
import config from "../config/config";

const sequelize = new Sequelize(
  config.db_name,
  config.db_username,
  config.db_password,
  {
    dialect : 'postgres',
    pool : {
      max : 5,
      min : 0,
      acquire : 30000,
      idle : 10000
    }
  }
)

const DataTypes = require("sequelize").DataTypes;
const _barang_keluar = require("./barang_keluar");
const _barang_masuk = require("./barang_masuk");
const _data_barang = require("./data_barang");
const _jenis_barang = require("./jenis_barang");
const _nota = require("./nota");
const _pembeli = require("./pembeli");

function initModels(sequelize) {
  const barang_keluar = _barang_keluar(sequelize, DataTypes);
  const barang_masuk = _barang_masuk(sequelize, DataTypes);
  const data_barang = _data_barang(sequelize, DataTypes);
  const jenis_barang = _jenis_barang(sequelize, DataTypes);
  const nota = _nota(sequelize, DataTypes);
  const pembeli = _pembeli(sequelize, DataTypes);

  data_barang.belongsToMany(nota, { as: 'barma_id_nota_nota', through: barang_masuk, foreignKey: "barma_id_dabar", otherKey: "barma_id_nota" });
  data_barang.belongsToMany(pembeli, { as: 'barkel_id_user_pembelis', through: barang_keluar, foreignKey: "barkel_id_dabar", otherKey: "barkel_id_user" });
  nota.belongsToMany(data_barang, { as: 'barma_id_dabar_data_barangs', through: barang_masuk, foreignKey: "barma_id_nota", otherKey: "barma_id_dabar" });
  pembeli.belongsToMany(data_barang, { as: 'barkel_id_dabar_data_barangs', through: barang_keluar, foreignKey: "barkel_id_user", otherKey: "barkel_id_dabar" });
  barang_keluar.belongsTo(data_barang, { as: "barkel_id_dabar_data_barang", foreignKey: "barkel_id_dabar"});
  data_barang.hasMany(barang_keluar, { as: "barang_keluars", foreignKey: "barkel_id_dabar"});
  barang_masuk.belongsTo(data_barang, { as: "barma_id_dabar_data_barang", foreignKey: "barma_id_dabar"});
  data_barang.hasMany(barang_masuk, { as: "barang_masuks", foreignKey: "barma_id_dabar"});
  data_barang.belongsTo(jenis_barang, { as: "id_jebar_jenis_barang", foreignKey: "id_jebar"});
  jenis_barang.hasMany(data_barang, { as: "data_barangs", foreignKey: "id_jebar"});
  barang_masuk.belongsTo(nota, { as: "barma_id_nota_notum", foreignKey: "barma_id_nota"});
  nota.hasMany(barang_masuk, { as: "barang_masuks", foreignKey: "barma_id_nota"});
  barang_keluar.belongsTo(pembeli, { as: "barkel_id_user_pembeli", foreignKey: "barkel_id_user"});
  pembeli.hasMany(barang_keluar, { as: "barang_keluars", foreignKey: "barkel_id_user"});

  return {
    barang_keluar,
    barang_masuk,
    data_barang,
    jenis_barang,
    nota,
    pembeli,
  };
}
const models = initModels(sequelize);
export default models
export {sequelize}

// module.exports = initModels;
// module.exports.initModels = initModels;
// module.exports.default = initModels;