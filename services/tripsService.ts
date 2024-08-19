import Trip from "@/models/Trip";
import { tripData } from "@/data/trips";

class TripsService {

   fetchTripsByAgent(): Promise<Trip[]> {

        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(tripData);
            },1000)
        })
       
    }

}

export default TripsService;