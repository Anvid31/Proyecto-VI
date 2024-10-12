import mongoose from "mongoose";

const gastosSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  cantidad: Number,
  fecha: String,
});

const DispositivoModel = mongoose.model("Gastos", gastosSchema);

export { DispositivoModel };
