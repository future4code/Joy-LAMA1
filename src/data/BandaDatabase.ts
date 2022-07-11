
import { banda } from "../model/banda";
import { BaseDatabase } from "./BaseDatabase";

export class BandaDatabase extends BaseDatabase {
    private static LAMA_BANDAS = "LAMA_BANDAS";
   public insertBanda = async(
    banda: banda
   ) => {
      try {
        await this.getConnection().insert({
            id: banda.id,
            name: banda.name,
            music_genre: banda.music_genre,
            responsible: banda.responsible
       
         }).into(BandaDatabase.LAMA_BANDAS);
         
        } catch (error:any) {
         throw new Error(error.message)
      }

   }

 public getBanda = async(
    banda: banda
) => {
   try {

      const result = await this.getConnection()
          .select("*").where({ id: banda.id }).from(BandaDatabase.LAMA_BANDAS);

      return result;

    } catch (error:any) {
      throw new Error(error.sqlMessage || error.message);
  }
}
public removeBanda = async(
   input:banda
) => {
   try {
      
      const result = await this.getConnection()
          .delete().where({ id: input.id}).andWhere ({ id: input.id}).from(BandaDatabase.LAMA_BANDAS);

      return result;

    } catch (error:any) {
      throw new Error(error.sqlMessage || error.message);
  }
}
}



