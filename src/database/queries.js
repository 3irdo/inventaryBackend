// queries.js

export const queries = {
    getAllProducts: 'SELECT * FROM inventario',

    getAllVisitas: 'SELECT * FROM Visita_Tecnica',
    
    insertInventario: 'INSERT INTO Inventario (Nombre_Producto, Referencia, Marca, Numero_de_Orden, Fecha_de_Compra, Cantidad, Fk_Nombre_Empresa_Suministradora) VALUES (@Nombre_Producto, @Referencia, @Marca, @Numero_de_Orden, @Fecha_de_Compra, @Cantidad, @Fk_Nombre_Empresa_Suministradora)',

    getProductById: 'SELECT * FROM inventario WHERE Pk_Id_Producto = @Pk_Id_Producto',

    deleteById: 'DELETE FROM inventario WHERE Pk_Id_Producto = @Pk_Id_Producto',
}