// queries.js

export const queries = {
  // ----------- inventario -----------------------

  getAllProducts: "SELECT * FROM inventario",

  insertInventario:
    "INSERT INTO Inventario (Nombre_Producto, Referencia, Marca, Numero_de_Orden, Fecha_de_Compra, Cantidad, Fk_Nombre_Empresa_Suministradora) VALUES (@Nombre_Producto, @Referencia, @Marca, @Numero_de_Orden, @Fecha_de_Compra, @Cantidad, @Fk_Nombre_Empresa_Suministradora)",

  getProductById:
    "SELECT * FROM Inventario WHERE Pk_Id_Producto = @Pk_Id_Producto",

  deleteById: "DELETE FROM Inventario WHERE Pk_Id_Producto = @Pk_Id_Producto",

  updateProductById:
    "UPDATE Inventario SET Nombre_Producto = @Nombre_Producto, Referencia = @Referencia, Marca = @Marca, Numero_de_Orden = @Numero_de_Orden, Fecha_de_Compra = @Fecha_de_Compra, Cantidad = @Cantidad WHERE Pk_Id_Producto = @Pk_Id_Producto",

  // visita técnica --------------

  getAllVisitas: "SELECT * FROM Visita_Tecnica",

  insertVisita:
    "INSERT INTO Visita_Tecnica (Fecha_Visita_Tecnica, Tipo_Visita, Descripcion_Visita_Tecnica, Fk_CC_Usuario, Fk_Id_Producto, Fk_Numero_Cuenta_Cliente) VALUES (@Fecha_Visita_Tecnica, @Tipo_Visita, @Descripcion_Visita_Tecnica, @Fk_CC_Usuario, @Fk_Id_Producto, @Fk_Numero_Cuenta_Cliente)",

  getVisitaById:
    "SELECT * FROM Visita_Tecnica WHERE Pk_Id_Visita_Tecnica = @Pk_Id_Visita_Tecnica",

  deleteVisitaById:
    "DELETE FROM Visita_Tecnica WHERE Pk_Id_Visita_Tecnica = @Pk_Id_Visita_Tecnica",

  updateVisitaById:
    "UPDATE Visita_Tecnica SET Fecha_Visita_Tecnica = @Fecha_Visita_Tecnica, Tipo_Visita = @Tipo_Visita, Descripcion_Visita_Tecnica = @Descripcion_Visita_Tecnica, Fk_CC_Usuario = @Fk_CC_Usuario, Fk_Id_Producto = @Fk_Id_Producto, Fk_Numero_Cuenta_Cliente = @Fk_Numero_Cuenta_Cliente WHERE Pk_Id_Visita_Tecnica = @Pk_Id_Visita_Tecnica",

  // ----------------------- clientes ------------------

  getAllClientes: "SELECT * FROM Clientes",

  // ----------------auth --------------

  insertUser:
    "INSERT INTO Roles_Usuarios (Fk_CC_Usuario, Fk_Id_Rol, Contraseña) VALUES (@Fk_CC_Usuario, @Fk_Id_Rol, @Contraseña)",

  userLogin:
    "SELECT * FROM Roles_Usuarios WHERE Fk_CC_Usuario = @Fk_CC_Usuario",

  // --------------usuario tecnico ------
  getUsuarioTecnico: "SELECT * FROM Usuario_Tecnico",

  getUserById: "SELECT * FROM Usuario_Tecnico WHERE Pk_CC_Usuario = @Pk_CC_Usuario",

  insertUsuarioTecnico:
    "INSERT INTO Usuario_Tecnico(Pk_CC_Usuario, Nombre_Usuario, Apellido_Usuario, Telefono_Usuario, Correo_Usuario) VALUES(@documento, @nombre, @apellido, @telefono, @correo)",

  delUsuarioTecnicoById:
    "DELETE FROM Usuario_Tecnico WHERE Pk_CC_Usuario = @Pk_CC_Usuario",
  updateTecnicoById:
    "Update Usuario_Tecnico SET Nombre_Usuario = @Nombre_Usuario, Apellido_Usuario = @Apellido_Usuario, Telefono_Usuario = @Telefono_Usuario, Correo_Usuario= @Correo_Usuario, Pk_CC_Usuario = @Pk_CC_Usuario ",

  // -------------- visitas tecnicas ok--
  insertVisitaTecnica:
    "INSERT INTO Visita_Tecnica (Fecha_Visita_Tecnica, Tipo_Visita, Descripcion_Visita_Tecnica, Fk_CC_Usuario, Fk_Id_Producto, Fk_Numero_Cuenta_Cliente) VALUES (@fechaVisita, @tipoViista, @descripcion, @ccUsuario, @idProducto, @CuentaCliente)",
};
