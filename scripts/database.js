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
export const getAvailableMinerals = () => {
  return database.availableMinerals.map((availableMineral) => ({
    ...availableMineral,
  }));
};
export const getMiningFacilities = () => {
  return database.miningFacilities.map((miningFacility) => ({
    ...miningFacility,
  }));
};
export const getGovernors = () => {
  return database.governors.map((governor) => ({ ...governor }));
};
export const getColonies = () => {
  return database.colonies.map((colony) => ({ ...colony }));
};
export const setAvailableMineral = (id) => {
  database.orderBuilder.availableMineralId = id;
};
export const setMiningFacility = (id) => {
  database.orderBuilder.miningFacilityId = id;
};
export const setGovernor = (id) => {
  database.orderBuilder.governorId = id;
};
export const setColony = (id) => {
  database.orderBuilder.colonyId = id;
};
export const addCustomOrder = () => {
  // Copy the current state of user choices
  const newOrder = { ...database.orderBuilder };

  // Add a new primary key to the object
  const lastIndex = database.availableResources.length - 1;
  newOrder.id = database.availableResources[lastIndex].id + 1;

  // Add a timestamp to the order
  newOrder.timestamp = Date.now();

  // Add the new order object to custom orders state
  database.availableResources.push(newOrder);
  // Reset the temporary state for user choices
  console.log(database.orderBuilder);
  database.orderBuilder = {};

  // Broadcast a notification that permanent state has changed
  document.dispatchEvent(new CustomEvent("stateChanged"));
};
