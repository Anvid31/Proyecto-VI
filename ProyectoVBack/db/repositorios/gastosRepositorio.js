import { DispositivoModel } from '../../models/gastosModel.js'


const crear = async (Gastos) => {

  const nuevoDispositivo = new DispositivoModel({
    nombre: Gastos.nombre,
    descripcion: Gastos.descripcion,
    cantidad: Gastos.cantidad,
    fecha: Gastos.fecha
  })

  return await nuevoDispositivo.save()
}

const leer = async () => {
  return await DispositivoModel.find()
}


export default {crear,leer}
