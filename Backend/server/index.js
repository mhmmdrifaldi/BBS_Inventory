import 'dotenv/config'
import express from "express";
import cors from "cors";
import compress from "compression";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import models,{sequelize} from "./models/init-models";
import routes from './routes/IndexRoute'
import config from './config/config';

const port = process.env.PORT || 3000;
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(helmet())
app.use(compress())
app.use(cors())
app.use(async(req,res,next)=> {
  req.context = {models}
  next()
})

//Masukkan Routes
app.use(config.URL_API + '/jenis_barang', routes.JebarRoute)
app.use(config.URL_API + '/data_barang', routes.DabarRoute)
app.use(config.URL_API + '/barang_masuk', routes.BarmaRoute)
app.use(config.URL_API + '/barang_keluar', routes.BarkelRoute)

const dropDatabaseSync = false

sequelize.sync({force : dropDatabaseSync}).then(async()=>{
  if (dropDatabaseSync) {
    console.log("Database do not drop");
  }
  app.listen(port,()=>{console.log('Server is listening on port '+port)})
})

export default app