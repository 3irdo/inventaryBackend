// auth.controller.js
import { getConection } from '../database/conection';
import { queries } from '../database/queries';

export const loginUser = async (req, res) => {
  const { Fk_CC_Usuario, Contraseña } = req.body;

  try {
    const pool = await getConection();
    const result = await pool.request()
      .input('Fk_CC_Usuario', Fk_CC_Usuario)
      .query(queries.userLogin);

    const user = result.recordset[0];
    if (!user) {
      return res.status(400).json({ error: 'Usuario no encontrado' });
    }

    // No es necesario comparar la contraseña, ya que no se está hasheando
    // simplemente retornamos un mensaje de inicio de sesión exitoso
    res.json({ success: true, message: 'Inicio de sesión exitoso' });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};

export const registerUser = async (req, res) => {
  const { Fk_CC_Usuario, Fk_Id_Rol, Contraseña } = req.body;

  try {
    const pool = await getConection();
    await pool.request()
      .input('Fk_CC_Usuario', Fk_CC_Usuario)
      .input('Fk_Id_Rol', Fk_Id_Rol)
      .input('Contraseña', Contraseña) // Insertar la contraseña sin hashear
      .query(queries.insertUser);

    res.json({ success: true, message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error('Error al registrar usuario:', error);
    res.status(500).json({ error: 'Error al registrar usuario' });
  }
};

