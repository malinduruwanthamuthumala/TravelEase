export default interface TripEvent {
  eventId: string;
  type: 'activity' | 'accommodation' | 'transport' | 'meal'; // Limit types to known values
  name: string;
  description: string;
  startTime: string; // ISO date string
  endTime: string;   // ISO date string
  budget: number;
}