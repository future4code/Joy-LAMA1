import dotenv from "dotenv";
import {AddressInfo} from "net";
import express from "express";
import { userRouter } from "./routes/userRouter";
import { bandaRouter } from "./routes/bandaRouter";
import { showRouter } from "./routes/showRouter";
dotenv.config();
const app = express();
app.use(express.json());


app.post("/signup", userRouter)
app.post("/login", userRouter)
app.post("/banda", bandaRouter)
app.get("/banda/:id", bandaRouter)
app.delete("/banda/:id", bandaRouter)
app.get("/show", showRouter)
app.post("/show", showRouter)





const server = app.listen(3000, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Servidor rodando em http://localhost:${address.port}`);
    } else {
      console.error(`Falha ao rodar o servidor.`);
    }
  });