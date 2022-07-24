import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import {show, showInputDTO} from "../model/show"


export class ShowController {

  public createShow = async (
      req: Request,
      res: Response
   ) => {
      try {
         const { week_day, start_time, end_time,band_id }= req.body
   
         const input: showInputDTO = {
            week_day,
            start_time,
            end_time,
            band_id

         }
   
         const showBusiness = new ShowBusiness
         showBusiness.createShow(input)
   
         res.status(201).send({ message: "Show Adicionada com Sucesso!" })
      } catch (error:any) {
         res.status(400).send(error.message)
      }
   }
   public getShow = async (
      req: Request,
      res: Response,show:any
   ) => {
      try {

         const Shows = await new ShowBusiness().getShow(show);

         res.send(Shows).status(200);
      } catch (error:any) {
         res.send({ message: error.message }).status(error.status);
     }
 }
   }
   
   


