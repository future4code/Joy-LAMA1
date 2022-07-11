import { Request, Response } from "express";
import { BandaBusiness } from "../business/BandaBusiness";
import {banda, bandaInputDTO} from "../model/banda"


export class BandaController {

  public createBanda = async (
      req: Request,
      res: Response
   ) => {
      try {
         const { name, music_genre, responsible }= req.body
   
         const input: bandaInputDTO = {
            name,
            music_genre,
            responsible
         }
   
         const bandaBusiness = new BandaBusiness
         bandaBusiness.createBanda(input)
   
         res.status(201).send({ message: "Banda Adicionada com Sucesso!" })
      } catch (error:any) {
         res.status(400).send(error.message)
      }
   }

 public getBanda = async (
   req: Request,
   res: Response
) => {
   try {
    const input:any = {
        id: req.params.id,
    }
      const banda = await new BandaBusiness().getBanda(input);
      
      res.send(banda).status(200);
   } catch (error:any) {
      res.send({ message: error.message }).status(error.status);
  }
}
public removeBanda = async (
   req: Request,
   res: Response
) => {
   try {

      const input:any = {
         id: req.params.id,
     }
          
      const bandaBusiness = new BandaBusiness
      bandaBusiness.removeBanda(input)

      res.status(201).send({ message: "Banda Removida!" })

   } catch (error:any) {
      res.send({ message: error.message }).status(error.status);
  }
}
   }
   
   


