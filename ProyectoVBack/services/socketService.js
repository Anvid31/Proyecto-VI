import { Server } from "socket.io";
import gastosService from "./gastosService";


const setupSocket = (server) => {
    console.log("Socket Inciado")
  const io = new Server(server, { cors: { origin: "http://localhost:4200" } });

  io.on("connection", (socket) => {
    console.log("Usuario Conectado", socket.id);

    const sendGeoData = async () => {
      const data = await gastosService.leerGastos()
      socket.emit("data", data);
    };

    const interval = setInterval(sendGeoData, 5000);

    socket.on("disconnect", (reason) => {
      clearInterval(interval);
      console.log("Cliente Desconectado", reason);
    });
  });
};

export { setupSocket };
