import app from './app'
import './database/conection'

app.listen(app.get("port"))

console.log("port " , app.get("port"))