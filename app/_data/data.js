const travelPlans = [
    {
      _id: "64d78c6f89dfg07b9c8b1234", // Example MongoDB ObjectId for the travel plan
      tripName: "European Adventure",
      agentId: "64d78c6f89dfg07b9c8b5678", // Example MongoDB ObjectId for the agent
      mainLocations: ["Paris", "France"],
      startDate: new Date("2024-09-01"), // Start date of the entire trip
      endDate: new Date("2024-09-20"), // End date of the entire trip
      agent: {
        name: "TravelCorp",
        contact: {
          phone: "+1 123-456-7890",
          email: "agent@travelcorp.com",
        },
      },
      participants: [
        { _id: "64d78c6f89dfg07b9c8b5679", name: "John Doe", email: "john@example.com" },
        { _id: "64d78c6f89dfg07b9c8b5680", name: "Jane Smith", email: "jane@example.com" }
      ],
      events: [
        {
          eventType: "location",
          name: "Paris, France",
          arrivalDate: new Date("2024-09-01"),
          departureDate: new Date("2024-09-05"),
          transport: {
            medium: "Flight",
            details: "Flight AF123 from JFK to CDG",
            cost: 500,
          },
          activities: [
            {
              _id: "64d78c6f89dfg07b9c8b1235",
              type: "Sightseeing",
              name: "Eiffel Tower Visit",
              date: new Date("2024-09-03"),
              budget: 100,
              participants: [
                { _id: "64d78c6f89dfg07b9c8b5679", name: "John Doe" },
                { _id: "64d78c6f89dfg07b9c8b5680", name: "Jane Smith" },
              ],
              transport: {
                medium: "Metro",
                details: "Paris Metro Line 6",
                cost: 10,
              },
              contactPerson: {
                name: "Pierre Dupont",
                phone: "+33 1 23 45 67 89",
                email: "pierre@example.com",
              },
              provider: {
                name: "Paris Sightseeing Tours",
                website: "www.parissightseeing.com",
              },
            },
          ],
        },
        {
          eventType: "location",
          name: "Rome, Italy",
          arrivalDate: new Date("2024-09-05"),
          departureDate: new Date("2024-09-10"),
          transport: {
            medium: "Train",
            details: "High-speed train from Paris to Rome",
            cost: 150,
          },
          activities: [
            {
              _id: "64d78c6f89dfg07b9c8b1236",
              type: "Sightseeing",
              name: "Vatican Museum Tour",
              date: new Date("2024-09-10"),
              budget: 200,
              participants: [
                { _id: "64d78c6f89dfg07b9c8b5679", name: "John Doe" },
                { _id: "64d78c6f89dfg07b9c8b5680", name: "Jane Smith" },
              ],
              transport: {
                medium: "Taxi",
                details: "Taxi from Hotel to Vatican",
                cost: 25,
              },
              contactPerson: {
                name: "Luigi Rossi",
                phone: "+39 06 123 4567",
                email: "luigi@example.com",
              },
              provider: {
                name: "Rome Cultural Experiences",
                website: "www.romeculture.com",
              },
            },
            {
              _id: "64d78c6f89dfg07b9c8b1237",
              type: "Meal",
              name: "Dinner at La Pergola",
              date: new Date("2024-09-12"),
              budget: 300,
              participants: [
                { _id: "64d78c6f89dfg07b9c8b5679", name: "John Doe" },
                { _id: "64d78c6f89dfg07b9c8b5680", name: "Jane Smith" },
              ],
              transport: {
                medium: "Walk",
                details: "Short walk from hotel to restaurant",
                cost: 0,
              },
              contactPerson: {
                name: "Giorgio Bianchi",
                phone: "+39 06 678 9012",
                email: "giorgio@lapergola.com",
              },
              provider: {
                name: "La Pergola Restaurant",
                website: "www.lapergola.com",
              },
            },
          ],
        },
      ],
      totalBudget: 5000,
      status: "Planned",
    },
    {
      _id: "64d78c6f89dfg07b9c8b1238", // Example MongoDB ObjectId for the travel plan
      tripName: "Asian Escapade",
      agentId: "64d78c6f89dfg07b9c8b5678", // Example MongoDB ObjectId for the agent
      mainLocations: ["Tokyo", "Japan"],
      startDate: new Date("2024-10-10"), // Start date of the entire trip
      endDate: new Date("2024-10-25"), // End date of the entire trip
      agent: {
        name: "AsiaTravel",
        contact: {
          phone: "+1 987-654-3210",
          email: "agent@asiatravel.com",
        },
      },
      participants: [
        { _id: "64d78c6f89dfg07b9c8b5681", name: "Alice Johnson", email: "alice@example.com" },
        { _id: "64d78c6f89dfg07b9c8b5682", name: "Bob Brown", email: "bob@example.com" }
      ],
      events: [
        {
          eventType: "location",
          name: "Tokyo, Japan",
          arrivalDate: new Date("2024-10-10"),
          departureDate: new Date("2024-10-15"),
          transport: {
            medium: "Flight",
            details: "Flight JL456 from LAX to NRT",
            cost: 600,
          },
          activities: [
            {
              _id: "64d78c6f89dfg07b9c8b1239",
              type: "Sightseeing",
              name: "Mt. Fuji Climb",
              date: new Date("2024-10-12"),
              budget: 250,
              participants: [
                { _id: "64d78c6f89dfg07b9c8b5681", name: "Alice Johnson" },
                { _id: "64d78c6f89dfg07b9c8b5682", name: "Bob Brown" },
              ],
              transport: {
                medium: "Bus",
                details: "Bus from Tokyo to Mt. Fuji",
                cost: 50,
              },
              contactPerson: {
                name: "Yuki Tanaka",
                phone: "+81 3 1234 5678",
                email: "yuki@fujitours.jp",
              },
              provider: {
                name: "Fuji Mountain Guides",
                website: "www.fujimountainguides.com",
              },
            },
            {
              _id: "64d78c6f89dfg07b9c8b1240",
              type: "Activity",
              name: "Tokyo Disneyland",
              date: new Date("2024-10-14"),
              budget: 200,
              participants: [
                { _id: "64d78c6f89dfg07b9c8b5681", name: "Alice Johnson" },
                { _id: "64d78c6f89dfg07b9c8b5682", name: "Bob Brown" },
              ],
              transport: {
                medium: "Train",
                details: "Tokyo Metro to Disneyland",
                cost: 15,
              },
              contactPerson: {
                name: "Satoshi Nakamura",
                phone: "+81 3 8765 4321",
                email: "satoshi@disney.co.jp",
              },
              provider: {
                name: "Tokyo Disneyland",
                website: "www.tokyodisneyland.co.jp",
              },
            },
          ],
        },
        {
          eventType: "location",
          name: "Seoul, South Korea",
          arrivalDate: new Date("2024-10-15"),
          departureDate: new Date("2024-10-25"),
          transport: {
            medium: "Train",
            details: "Bullet train from Tokyo to Seoul",
            cost: 200,
          },
          activities: [
            {
              _id: "64d78c6f89dfg07b9c8b1241",
              type: "Meal",
              name: "Korean BBQ in Seoul",
              date: new Date("2024-10-20"),
              budget: 150,
              participants: [
                { _id: "64d78c6f89dfg07b9c8b5681", name: "Alice Johnson" },
                { _id: "64d78c6f89dfg07b9c8b5682", name: "Bob Brown" },
              ],
              transport: {
                medium: "Taxi",
                details: "Taxi from Hotel to Restaurant",
                cost: 20,
              },
              contactPerson: {
                name: "Min-Jun Lee",
                phone: "+82 2 3456 7890",
                email: "minjun@koreanbbq.kr",
              },
              provider: {
                name: "Seoul BBQ House",
                website: "www.seoulbbqhouse.kr",
              },
            },
          ],
        },
      ],
      totalBudget: 4000,
      status: "Confirmed",
    },
  ];
  
  export default travelPlans;
  