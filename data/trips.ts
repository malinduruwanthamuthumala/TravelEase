import Trip from "@/models/Trip";

export let tripData: Trip[] = [
  {
    _id: "64ecb5d1c2a7f611d8f1f001",
    tripId: "trip001",
    title: "7-Day European Tour",
    description: "Explore the best of Europe in a 7-day guided tour.",
    startDate: "2024-09-01T00:00:00Z",
    endDate: "2024-09-08T00:00:00Z",
    price: 1500.00,
    currency: "USD",
    availableSeats: 20,
    bookedSeats: 5,
    locations: [
      {
        locationId: "loc1",
        name: "Paris",
        description: "Visit the Eiffel Tower and Louvre Museum.",
        totalBudget: 500,
        events: [
          {
            eventId: "event1",
            type: "activity",
            name: "Eiffel Tower Tour",
            description: "Guided tour of the Eiffel Tower.",
            startTime: "2024-09-01T10:00:00Z",
            endTime: "2024-09-01T12:00:00Z",
            budget: 200
          }
        ]
      },
      {
        locationId: "loc2",
        name: "Rome",
        description: "Explore the Colosseum and Vatican City.",
        totalBudget: 700,
        events: [
          {
            eventId: "event2",
            type: "activity",
            name: "Colosseum Visit",
            description: "Tour of the historic Colosseum.",
            startTime: "2024-09-05T10:00:00Z",
            endTime: "2024-09-05T12:00:00Z",
            budget: 300
          }
        ]
      }
    ],
    participantIds: ["participant1", "participant2", "participant3"],
    agentId: "agent123",
    createdAt: "2024-08-18T12:34:56Z"
  },
  {
    _id: "64ecb5d1c2a7f611d8f1f002",
    tripId: "trip002",
    title: "10-Day Asian Adventure",
    description: "Discover the wonders of Asia in a 10-day tour.",
    startDate: "2024-10-10T00:00:00Z",
    endDate: "2024-10-20T00:00:00Z",
    price: 1800.00,
    currency: "USD",
    availableSeats: 25,
    bookedSeats: 10,
    locations: [
      {
        locationId: "loc3",
        name: "Tokyo",
        description: "Experience the bustling city life of Tokyo.",
        totalBudget: 800,
        events: [
          {
            eventId: "event3",
            type: "activity",
            name: "Tokyo Tower Visit",
            description: "A visit to the famous Tokyo Tower.",
            startTime: "2024-10-11T09:00:00Z",
            endTime: "2024-10-11T11:00:00Z",
            budget: 250
          },
          {
            eventId: "event4",
            type: "meal",
            name: "Sushi Dinner",
            description: "Enjoy a traditional sushi dinner.",
            startTime: "2024-10-11T19:00:00Z",
            endTime: "2024-10-11T21:00:00Z",
            budget: 150
          }
        ]
      },
      {
        locationId: "loc4",
        name: "Bangkok",
        description: "Explore the vibrant markets and temples.",
        totalBudget: 600,
        events: [
          {
            eventId: "event5",
            type: "activity",
            name: "Temple Tour",
            description: "Guided tour of Bangkok's famous temples.",
            startTime: "2024-10-15T08:00:00Z",
            endTime: "2024-10-15T12:00:00Z",
            budget: 200
          }
        ]
      }
    ],
    participantIds: ["participant4", "participant5", "participant6"],
    agentId: "agent456",
    createdAt: "2024-08-20T08:20:00Z"
  },
  {
    _id: "64ecb5d1c2a7f611d8f1f003",
    tripId: "trip003",
    title: "5-Day Australian Getaway",
    description: "Relax and explore the beauty of Australia.",
    startDate: "2024-11-01T00:00:00Z",
    endDate: "2024-11-06T00:00:00Z",
    price: 1200.00,
    currency: "AUD",
    availableSeats: 15,
    bookedSeats: 7,
    locations: [
      {
        locationId: "loc5",
        name: "Sydney",
        description: "Visit the Sydney Opera House and Bondi Beach.",
        totalBudget: 900,
        events: [
          {
            eventId: "event6",
            type: "activity",
            name: "Opera House Tour",
            description: "A guided tour of the Sydney Opera House.",
            startTime: "2024-11-02T09:00:00Z",
            endTime: "2024-11-02T11:00:00Z",
            budget: 300
          }
        ]
      }
    ],
    participantIds: ["participant7", "participant8"],
    agentId: "agent789",
    createdAt: "2024-09-01T09:45:00Z"
  },
  {
    _id: "64ecb5d1c2a7f611d8f1f004",
    tripId: "trip004",
    title: "12-Day African Safari",
    description: "Experience the wild beauty of Africa in a 12-day safari.",
    startDate: "2024-12-01T00:00:00Z",
    endDate: "2024-12-13T00:00:00Z",
    price: 3000.00,
    currency: "USD",
    availableSeats: 10,
    bookedSeats: 8,
    locations: [
      {
        locationId: "loc6",
        name: "Serengeti",
        description: "Witness the great migration in the Serengeti.",
        totalBudget: 1500,
        events: [
          {
            eventId: "event7",
            type: "activity",
            name: "Safari Drive",
            description: "A thrilling safari drive through the Serengeti.",
            startTime: "2024-12-02T06:00:00Z",
            endTime: "2024-12-02T10:00:00Z",
            budget: 1000
          },
          {
            eventId: "event8",
            type: "meal",
            name: "Bush Dinner",
            description: "A traditional dinner in the heart of the bush.",
            startTime: "2024-12-02T18:00:00Z",
            endTime: "2024-12-02T20:00:00Z",
            budget: 300
          }
        ]
      },
      {
        locationId: "loc7",
        name: "Victoria Falls",
        description: "Visit the majestic Victoria Falls.",
        totalBudget: 1000,
        events: [
          {
            eventId: "event9",
            type: "activity",
            name: "Helicopter Ride",
            description: "A breathtaking helicopter ride over Victoria Falls.",
            startTime: "2024-12-10T08:00:00Z",
            endTime: "2024-12-10T09:00:00Z",
            budget: 800
          }
        ]
      }
    ],
    participantIds: ["participant9", "participant10", "participant11"],
    agentId: "agent012",
    createdAt: "2024-09-05T14:22:00Z"
  }
];
