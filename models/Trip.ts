import Location from "./Location";
import TripEvent from "./TripEvent";

export default interface Trip {
    _id: string; // ObjectId as string
    tripId: string;
    title: string;
    description: string;
    startDate: string; // ISO date string
    endDate: string;   // ISO date string
    price: number;
    currency: string;
    availableSeats: number;
    bookedSeats: number;
    locations: Location[]; // Array of locations with their events and budget
    participantIds: string[]; // Array of participant IDs
    agentId: string; // Link to the agent organizing the trip
    createdAt: string; // ISO date string
  }
  