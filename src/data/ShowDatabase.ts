
import { show } from "../model/show";
import { BaseDatabase } from "./BaseDatabase";

export class ShowDatabase extends BaseDatabase {
    private static LAMA_SHOWS = "LAMA_SHOWS";
   public insertShow = async(
    show: show
   ) => {
      try {
        await this.getConnection().insert({
            id: show.id,
            week_day: show.week_day,
            start_time: show.start_time,
            end_time: show.end_time,
            band_id: show.band_id
       
         }).into(ShowDatabase.LAMA_SHOWS);
         
      } catch (error:any) {
         throw new Error(error.message)
      }

   }
   public getShow = async(
      show: show
   ) => {
      try {

         const result = await this.getConnection()
             .select("*").from(ShowDatabase.LAMA_SHOWS);

         return result;

      } catch (error:any) {
      throw new Error(error.sqlMessage || error.message);
     }
 }
}



