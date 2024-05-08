import express from 'express'
import config from "./confing"
import inventarioRoutes from './routes/inventario.routes'

const app = express()
 

app.set("port", config.port)


app.use(inventarioRoutes)
export default app