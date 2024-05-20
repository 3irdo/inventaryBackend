// visitas.controller.js
import { getConection } from "../database/conection";
import { queries } from "../database/queries";

export const getVisitasTecnicas = async (req, res) => {
  try {
    const pool = await getConection();
    const result = await pool.request().query(queries.getAllVisitas);
    res.json(result.recordset);
  } catch (error) {
    console.error("error al obtener las visitas técnicas ", error);
    res
      .status(500)
      .json({ error: "Error al obtener el historial de visitas técnicas" });
  }
};

// -----------------nueva visita---------------------

export const createNewVisitaTecnica = async (req, res) => {
  const {
    fechaVisita,
    tipoViista,
    descripcion,
    ccUsuario,
    idProducto,
    CuentaCliente,
  } = req.body;

  try {
    const pool = await getConection();
    const result = await pool
      .request()
      .input("fechaVisita", fechaVisita)
      .input("tipoViista", tipoViista)
      .input("descripcion", descripcion)
      .input("ccUsuario", ccUsuario)
      .input("idProducto", idProducto)
      .input("CuentaCliente", CuentaCliente)
      .query(queries.insertVisitaTecnica);
    console.log(req.body);
    console.log(result);
    res.json({ success: true, insertedId: result.recordset });
  } catch (error) {
    console.error("error al insertar la nueva visita:", error);
    res
      .status(500)
      .json({ error: "error al insertar datos en la tabla Visita_Tecnica" });
  }
};
