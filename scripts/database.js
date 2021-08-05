const database = {
  availableMinerals: [
    { id: 1, name: "Salt", price: 5 },
    { id: 2, name: "Iron", price: 10 },
    { id: 3, name: "Nickel", price: 15 },
  ],
  miningFacilities: [
    { id: 1, name: "Europa", isActive: true },
    { id: 2, name: "Io", isActive: false },
    { id: 3, name: "Ganyemede", isActive: true },
    { id: 4, name: "Callisto", isActive: false },
  ],
  governors: [
    { id: 1, name: "Arnold Schwarzenegger", isActive: false, colonyId: 1 },
    { id: 2, name: "Gill Bates", isActive: true, colonyId: 1 },
    { id: 3, name: "Vermin Supreme", isActive: true, colonyId: 2 },
    { id: 4, name: "Clone of Vermin Supreme", isActive: false, colonyId: 2 },
    { id: 5, name: "Jim Bezos", isActive: false, colonyId: 3 },
    { id: 6, name: "Richard M. Nixon's head", isActive: true, colonyId: 3 },
  ],
  colonies: [
    { id: 1, name: "colony 1" },
    { id: 2, name: "colony 2" },
    { id: 3, name: "colony 3" },
  ],

  availableResources: [],
  orderBuilder: {},
};
