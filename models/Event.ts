export default interface Event {
    eventId: string;
    type: 'activity' | 'accommodation' | 'transport' | 'meal'; // Event types
    name: string;
    description: string;
    startTime: string; // ISO date string
    endTime: string;   // ISO date string
    budget: number;
  }
  