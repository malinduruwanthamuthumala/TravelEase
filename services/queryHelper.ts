import Trip from "../models/Trip";
import {tripData} from "../data/trips";
import TripsService from "./tripsService";



class QueryHelper {

    service: TripsService  =  new TripsService();

    async getTripsByAgent() : Promise<Trip[]>{
       try {
         const tripsData = await this.service.fetchTripsByAgent();
         return tripsData;
       } catch (error){
        console.log(error);
        return [];
       }
    }

}

export default QueryHelper;