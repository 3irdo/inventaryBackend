// indentario.controller.js
import sql from "mssql";
import { getConection } from "../database/conection";

// obtener inventario

export const getInventario = async (req, res) => {
  try {
    const pool = await getConection();
    const result = await pool.request().query("SELECT * FROM inventario");
    console.log(result);
    res.json(result.recordset);
  } catch (error) {
    console.error("Error al obtener el inventario:", error);
    res.status(500).json({ error: "Error al obtener el inventario" });
  }
};

// nuevo producto

export const createNewProduct = async (req, res) => {
  const {
    Pk_Id_Producto,
    Nombre_Producto,
    Referencia,
    Marca,
    Numero_de_Orden,
    Fecha_de_Compra,
    Cantidad,
    Fk_NIT_Empresa_Suministradora
  } = req.body;

  if (!Cantidad) {
    Cantidad === 0;
  }

  try {
    const pool = await getConection();
    const result = await pool
      .request()
      .input("Pk_Id_Producto", Pk_Id_Producto)
      .input("Nombre_Producto", Nombre_Producto)
      .input("Referencia", Referencia)
      .input("Marca", Marca)
      .input("Numero_de_Orden", Numero_de_Orden)
      .input("Fecha_de_Compra", Fecha_de_Compra)
      .input("Cantidad", Cantidad)
      .input("Fk_NIT_Empresa_Suministradora", Fk_NIT_Empresa_Suministradora)

      .query(
        "INSERT INTO Inventario (Pk_Id_Producto,Nombre_Producto, Referencia, Marca, Numero_de_Orden, Fecha_de_Compra, Cantidad, Fk_NIT_Empresa_Suministradora) VALUES (@Pk_Id_Producto,@Nombre_Producto, @Referencia, @Marca, @Numero_de_Orden, @Fecha_de_Compra, @Cantidad, @Fk_NIT_Empresa_Suministradora)"
      );
    res.json({ success: true, insertedId: result.recordset });
  } catch (error) {
    console.error("Error al insertar nuevo producto:", error);
    res.status(500).json({ error: "Error al insertar nuevo producto" });
  }
  console.log(req.body);
};


// editar productos 

export const editProduct = (req, res) => {
  try {
    
  } catch (error) {
    
  }
}







// empresas

export const getEmpresas = async (req, res) => {
  try {
    const pool = await getConection();
    const result = await pool
      .request()
      .query("SELECT * FROM Empresa_Suministradora");
    console.log(result);
    res.json(result.recordset);
  } catch (error) {
    console.error("Error al obtener el inventario:", error);
    res.status(500).json({ error: "Error al obtener el inventario" });
  }
};
