import { getConection } from "../database/conection";

export const getInventario = async (req, res) => {
  const pool = await getConection()
    const result = await pool.request()
    .query("SELECT * FROM inventario");
    console.log(result)
    res.json(result.recordset)
};

export const createNewProduct = (req, res) => {
    
}
