export default interface Location {
    locationId: string;
    name: string;
    description: string;
    totalBudget: number;
    events: Event[]; // Array of events related to this location
  }
  