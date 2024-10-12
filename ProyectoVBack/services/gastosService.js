import gastosRepositorio from "../db/repositorios/gastosRepositorio.js";

const crearGastos = async (Gastos) => {
  try {
    if (
      !Gastos.Nombre ||
      !Gastos.Descripcion ||
      !Gastos.Cantidad ||
      !Gastos.Fecha
    ) {
      console.log(Gastos)
      throw new Error("Datos Faltantes");
    }

    const nuevoGasto = gastosRepositorio.crear(Gastos);

    return nuevoGasto;
  } catch (error) {
    console.error("Error al crear Dispositivo en Servicio", error);
    throw error;
  }
};

const leerGastos = async () => {
  try {
    const gastos = await gastosRepositorio.leer();

    return gastos;
  } catch (error) {
    console.error("Error al Leer en Servicio");

    throw error;
  }
};

export default { crearGastos, leerGastos };
