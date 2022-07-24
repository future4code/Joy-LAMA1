import { IdGenerator } from "../services/IdGenerator";
import { ShowDatabase } from "../data/ShowDatabase";
import { show,showInputDTO } from "../model/show";
import {  CustomError, InvalidEmail, InvalidName, InvalidPassword } from "../error/customError";

const idGenerator = new IdGenerator()

export class ShowBusiness {
public createShow = async (input: showInputDTO) => {
   try {
     const { week_day, start_time, end_time ,band_id} = input;
     

     if (!week_day || !start_time  || !end_time||!band_id) {
        throw new CustomError(400,
          'Preencha os campos "dia da semana","tempo de inicio e fim" , "id da banda" ');
      }
     const id: string = idGenerator.generate()
     const showDatabase = new ShowDatabase();
    const show:show = {
      id,
      week_day,
      start_time,
      end_time,
      band_id
    }

     await showDatabase.insertShow({
       id,
       week_day,
       start_time,
       end_time,
       band_id
 
     });
    } catch (error:any) {
     throw new Error(error.message);
   }
 }

 public getShow = async (show:show) => {
  try {

      return await new ShowDatabase().getShow(show);
  
   
    } catch (error:any) {
    throw new Error(error.message);
  }
}

}

