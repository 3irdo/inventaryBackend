// inventario.controller.js
import { getConection } from "../database/conection";
import { queries } from "../database/queries";

// -----------------------inventario---------------------

// obtner datos de usuarios tecnicos

export const getUsuarioTecnico = async (req, res) => {
  try {
    const pool = await getConection();
    const result = await pool.request().query(queries.getUsuarioTecnico);
    res.json(result.recordset);
  } catch (error) {
    console.error("Error al obtener los datos de usuarios tecnico back");
    res
      .status(500)
      .json({ error: "error al obtener los datos usuario técnico" });
  }
};

export const getUsuarioTecnicoById = async (req, res) => {
  const { Pk_CC_Usuario } = req.params;
  const pool = await getConection();
  const result = await pool
    .request()
    .input("Pk_CC_Usuario", Pk_CC_Usuario)
    .query(queries.getUserById);
    if (result.recordset.length > 0) {
      res.json(result.recordset[0]);
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
};

// nuevo usuario
// Controlador backend
export const createNewUser = async (req, res) => {
  const {
    Pk_CC_Usuario,
    Nombre_Usuario,
    Apellido_Usuario,
    Telefono_Usuario,
    Correo_Usuario,
  } = req.body;

  try {
    const pool = await getConection();
    const result = await pool
      .request()
      .input("documento", Pk_CC_Usuario) // Asegúrate de que los nombres de las variables coinciden
      .input("nombre", Nombre_Usuario)
      .input("apellido", Apellido_Usuario)
      .input("telefono", Telefono_Usuario)
      .input("correo", Correo_Usuario)
      .query(queries.insertUsuarioTecnico);

    console.log(result);
    res.status(201).json({ message: "Usuario técnico creado exitosamente" });
  } catch (error) {
    console.error("Error al insertar nuevo técnico:", error);
    res
      .status(500)
      .json({ error: "Error al insertar datos en la tabla Usuario_Tecnico" });
  }
};

export const updateUsuarioTecnicoById = async (req, res) => {
  const { Nombre_Usuario, Apellido_Usuario, Telefono_Usuario, Correo_Usuario } =
    req.body;
  const { Pk_CC_Usuario } = req.params;

  try {
    const pool = await getConection();
    await pool
      .request()
      .input("Nombre_Usuario", Nombre_Usuario)
      .input("Apellido_Usuario", Apellido_Usuario)
      .input("Telefono_Usuario", Telefono_Usuario)
      .input("Correo_Usuario", Correo_Usuario)
      .input("Pk_CC_Usuario", Pk_CC_Usuario)
      .query(queries.updateTecnicoById);

    res.json({ success: true, message: "usuario actualizado correctamente" });
  } catch (error) {
    console.error("Error al actualizar la visita:", error);
    res.status(500).json({ error: "Error al actualizar la visita" });
  }
};

// borrar usuario
export const deleteUserById = async (req, res) => {
  const { Pk_CC_Usuario } = req.params;
  const pool = await getConection();
  const result = await pool
    .request()
    .input("Pk_CC_Usuario", Pk_CC_Usuario)
    .query(queries.delUsuarioTecnicoById);
  res.json({ message: "Usuario eliminado exitosamente" });
  console.log(result.recordset);
};

// obtener inventario

export const getInventario = async (req, res) => {
  try {
    const pool = await getConection();
    const result = await pool.request().query(queries.getAllProducts);
    res.json(result.recordset);
  } catch (error) {
    console.error("Error al obtener el inventario:", error);
    res.status(500).json({ error: "Error al obtener el inventario" });
  }
};

// nuevo producto

export const createNewProduct = async (req, res) => {
  const {
    Nombre_Producto,
    Referencia,
    Marca,
    Numero_de_Orden,
    Fecha_de_Compra,
    Fk_Nombre_Empresa_Suministradora,
  } = req.body;
  let { Cantidad } = req.body;

  if (!Cantidad) {
    Cantidad = 0;
  }

  try {
    const pool = await getConection();
    const result = await pool
      .request()
      .input("Nombre_Producto", Nombre_Producto)
      .input("Referencia", Referencia)
      .input("Marca", Marca)
      .input("Numero_de_Orden", Numero_de_Orden)
      .input("Fecha_de_Compra", Fecha_de_Compra)
      .input("Cantidad", Cantidad)
      .input(
        "Fk_Nombre_Empresa_Suministradora",
        Fk_Nombre_Empresa_Suministradora
      )
      .query(queries.insertInventario);
    console.log(result);
    res.json({ success: true, insertedId: result.recordset });
  } catch (error) {
    console.error("Error al insertar nuevo producto:", error);
    res.status(500).json({ error: "Error al insertar nuevo producto" });
  }
  console.log(req.body);
};

// producto por id --------------------
export const getProductById = async (req, res) => {
  const { Pk_Id_Producto } = req.params;
  const pool = await getConection();
  const result = await pool
    .request()
    .input("Pk_Id_Producto", Pk_Id_Producto)
    .query(queries.getProductById);
  res.json(result.recordset);
  console.log(result.recordset[0]);
};

// eliminar ----------------------

export const deleteProductById = async (req, res) => {
  const { Pk_Id_Producto } = req.params;
  const pool = await getConection();
  const result = await pool
    .request()
    .input("Pk_Id_Producto", Pk_Id_Producto)
    .query(queries.deleteById);
  res.json({ message: "Producto eliminado exitosamente" });
  console.log(result.recordset);
};

// actualizar producto por id
export const updateProductById = async (req, res) => {
  const {
    Nombre_Producto,
    Referencia,
    Marca,
    Numero_de_Orden,
    Fecha_de_Compra,
    Cantidad,
  } = req.body;
  const { Pk_Id_Producto } = req.params;

  try {
    const pool = await getConection();
    await pool
      .request()
      .input("Nombre_Producto", Nombre_Producto)
      .input("Referencia", Referencia)
      .input("Marca", Marca)
      .input("Numero_de_Orden", Numero_de_Orden)
      .input("Fecha_de_Compra", Fecha_de_Compra)
      .input("Cantidad", Cantidad)
      .input("Pk_Id_Producto", Pk_Id_Producto)
      .query(queries.updateProductById);

    res.json({ success: true, message: "Producto actualizado correctamente" });
  } catch (error) {
    console.error("Error al actualizar el producto:", error);
    res.status(500).json({ error: "Error al actualizar el producto" });
  }
};

// -------------------visitas-----------------
export const getVisitas = async (req, res) => {
  try {
    const pool = await getConection();
    const result = await pool.request().query(queries.getAllVisitas);
    res.json(result.recordset);
  } catch (error) {
    console.error("Error al obtener las visitas:", error);
    res.status(500).json({ error: "Error al obtener las visitas" });
  }
};

export const createNewVisita = async (req, res) => {
  const {
    Fecha_Visita_Tecnica,
    Tipo_Visita,
    Descripcion_Visita_Tecnica,
    Fk_CC_Usuario,
    Fk_Id_Producto,
    Fk_Numero_Cuenta_Cliente,
  } = req.body;

  try {
    const pool = await getConection();
    const result = await pool
      .request()
      .input("Fecha_Visita_Tecnica", Fecha_Visita_Tecnica)
      .input("Tipo_Visita", Tipo_Visita)
      .input("Descripcion_Visita_Tecnica", Descripcion_Visita_Tecnica)
      .input("Fk_CC_Usuario", Fk_CC_Usuario)
      .input("Fk_Id_Producto", Fk_Id_Producto)
      .input("Fk_Numero_Cuenta_Cliente", Fk_Numero_Cuenta_Cliente)
      .query(queries.insertVisita);

    res.json({
      success: true,
      message: "Visita añadida exitosamente",
      rowsAffected: result.rowsAffected,
    });
  } catch (error) {
    console.error("Error al insertar nueva visita:", error);
    res.status(500).json({ error: "Error al insertar nueva visita" });
  }
};

export const getVisitaById = async (req, res) => {
  const { Pk_Id_Visita_Tecnica } = req.params;
  const pool = await getConection();
  const result = await pool
    .request()
    .input("Pk_Id_Visita_Tecnica", Pk_Id_Visita_Tecnica)
    .query(queries.getVisitaById);
  res.json(result.recordset);
  console.log(result.recordset[0]);
};

export const deleteVisitaById = async (req, res) => {
  const { Pk_Id_Visita_Tecnica } = req.params;
  const pool = await getConection();
  const result = await pool
    .request()
    .input("Pk_Id_Visita_Tecnica", Pk_Id_Visita_Tecnica)
    .query(queries.deleteVisitaById);
  res.json({ message: "Visita eliminada exitosamente" });
  console.log(result.recordset);
};

export const updateVisitaById = async (req, res) => {
  const {
    Fecha_Visita_Tecnica,
    Tipo_Visita,
    Descripcion_Visita_Tecnica,
    Fk_CC_Usuario,
    Fk_Id_Producto,
    Fk_Numero_Cuenta_Cliente,
  } = req.body;
  const { Pk_Id_Visita_Tecnica } = req.params;

  try {
    const pool = await getConection();
    await pool
      .request()
      .input("Fecha_Visita_Tecnica", Fecha_Visita_Tecnica)
      .input("Tipo_Visita", Tipo_Visita)
      .input("Descripcion_Visita_Tecnica", Descripcion_Visita_Tecnica)
      .input("Fk_CC_Usuario", Fk_CC_Usuario)
      .input("Fk_Id_Producto", Fk_Id_Producto)
      .input("Fk_Numero_Cuenta_Cliente", Fk_Numero_Cuenta_Cliente)
      .input("Pk_Id_Visita_Tecnica", Pk_Id_Visita_Tecnica)
      .query(queries.updateVisitaById);

    res.json({ success: true, message: "Visita actualizada correctamente" });
  } catch (error) {
    console.error("Error al actualizar la visita:", error);
    res.status(500).json({ error: "Error al actualizar la visita" });
  }
};

// ------------------empresas--------------------------------
export const getEmpresas = async (req, res) => {
  try {
    const pool = await getConection();
    const result = await pool
      .request()
      .query("SELECT * FROM Empresa_Suministradora");
    res.json(result.recordset);
  } catch (error) {
    console.error("Error al obtener el inventario:", error);
    res.status(500).json({ error: "Error al obtener el inventario" });
  }
};

export const getEmpresasById = async (req, res) => {
  const { Pk_Id_Producto } = req.params;
  const pool = await getConection();
  const result = await pool
    .request()
    .input("Pk_Id_Producto", Pk_Id_Producto)
    .query(queries.getProductById);
  res.json(result.recordset);
  console.log(result.recordset[0]);
};

// --------------------clientes -----------------
export const getClientes = async (req, res) => {
  try {
    const pool = await getConection();
    const result = await pool.request().query(queries.getAllClientes);
    res.json(result.recordset);
  } catch (error) {
    console.error("Error al obtener los Clientes:", error);
    res.status(500).json({ error: "Error al obtener los Clientes" });
  }
};

// -----------------------------

export const getUserCredencial = async (req, res) => {
  try {
    const pool = await getConection();
    const result = await pool.request().query(queries.getUsuarioTecnico);
    res.json(result.recordset);
  } catch (error) {
    console.error("Error al obtener los datos de usuarios tecnico back");
    res
      .status(500)
      .json({ error: "error al obtener los datos usuario técnico" });
  }
};
