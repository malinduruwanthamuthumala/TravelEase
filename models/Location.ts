import TripEvent from "./TripEvent";

export default interface Location {
    locationId: string;
    name: string;
    description: string;
    totalBudget: number;
    events: TripEvent[]; // Array of TripEvent objects related to this location
  }