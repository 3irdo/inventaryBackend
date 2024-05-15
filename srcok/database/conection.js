// conection.js

import sql from "mssql";
import { config } from "dotenv";
config();

const dbSettings = {
  user: process.env.USUARIO,
  password: process.env.CLAVE,
  server: process.env.SERVIDOR,
  database: process.env.DB,
  options: {
    encrypt: false, //for Azure
    trustServiseCertificate: true, // cambiar a true para desarollo local
  },
};

export async function  getConection() {
  try {
    const pool = await sql.connect(dbSettings);
    return pool;
  } catch (error) {
    console.error("hubo un error al conectar la base de datos ", error);
  }

  // const result = await pool.request().query('SELECT * FROM Inventario')
  // console.log(result) esta linea de código es para probar que está bien la conexión, deber retornar en consola la consulta
}
