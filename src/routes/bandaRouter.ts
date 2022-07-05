import express from "express";
import { BandaController } from "../controller/BandaController"

export const bandaRouter = express.Router();
const bandaController = new BandaController();


bandaRouter.post('/banda', bandaController.createBanda)
bandaRouter.get('/banda/:id', bandaController.getBanda)
bandaRouter.delete('/banda/:id', bandaController.removeBanda)


