const database = {
  availableMinerals: [
    { id: 1, name: "Salt", price: 5, amount: 1 },
    { id: 2, name: "Iron", price: 10, amount: 1 },
    { id: 3, name: "Nickel", price: 15, amount: 1 },
    { id: 4, name: "Gold", price: 12, amount: 1 },
  ],

  miningFacilities: [
    { id: 1, name: "Europa", isActive: true },
    { id: 2, name: "Io", isActive: false },
    { id: 3, name: "Ganyemede", isActive: true },
    { id: 4, name: "Callisto", isActive: false },
  ],

  facilityMineralStocks: [
    { id: 1, mineralId: 1, miningFacilityId: 1, availableStock: 3 },
    { id: 2, mineralId: 2, miningFacilityId: 2, availableStock: 2 },
    { id: 3, mineralId: 3, miningFacilityId: 3, availableStock: 1 },
    { id: 4, mineralId: 4, miningFacilityId: 2, availableStock: 2 },
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
    { id: 1, name: "Everest" },
    { id: 2, name: "Kilimanjaro" },
    { id: 3, name: "Rushmore" },
  ],

  availableResources: [
    { id: 1, mineralId: 1, colonyId: 1, amount: 1 },
    { id: 2, mineralId: 2, colonyId: 2, amount: 2 },
    { id: 3, mineralId: 3, colonyId: 3, amount: 3 },
  ],

  transientState: {                                                   // Selected Radio button PUSHES value into transientState.selectedMinerals array
    selectedGovernorId: 0,
    selectedFacilityId: 0,
    selectedMinerals: [],
  },

  resourcesForPurchase: {},
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
export const getAvailableResources = () => {
  return database.availableResources.map((resource) => ({ ...resource }));
};
export const getTransientState = () => {
  return database.transientState;
};
export const getResourcesForPurchase = () => {
  return database.resourcesForPurchase;
};
export const getFacilityMineralStocks = () => {
  return database.facilityMineralStocks.map((stock) => ({ ...stock }));
};

export const setMiningFacility = (id) => {
  database.transientState.selectedFacilityId = id;
  document.dispatchEvent(new CustomEvent("stateChanged"));
};
export const setGovernor = (id) => {
  database.transientState.selectedGovernorId = id;
  document.dispatchEvent(new CustomEvent("stateChanged"));
};
export const setColony = (id) => {
  database.transientState.colonyId = id;
};
export const setSelectedMineral = (id) => {
  database.transientState.selectedMinerals.push(id);
};

export const addSelectedMineral = () => {
  const newMineral = { ...database.transientState.selectedMinerals }

  if (database.transientState.selectedMinerals.length === 0) {
    newMineral.id === 1
  } else {
    const lastIndex = database.transientState.selectedMinerals.length - 1;

    newMineral.id = database.transientState.selectedMinerals[lastIndex].id + 1;
  }

  database.transientState.selectedMinerals.push(newMineral)

  console.log(database.transientState.selectedMinerals)

  document.dispatchEvent(new CustomEvent("stateChanged"));
}


export const addPurchase = () => {
  // Copy the current state of user choices
  const newOrder = { ...database.resourcesForPurchase };

  // Add a new primary key to the object
  const lastIndex = database.availableResources.length - 1;
  newOrder.id = database.availableResources[lastIndex].id + 1;

  // Add the new order object to custom orders state
  database.availableResources.push(newOrder);

  // Reset the temporary state for user choices
  console.log(database.resourcesForPurchase);
  database.resourcesForPurchase = {};

  // Broadcast a notification that permanent state has changed
  document.dispatchEvent(new CustomEvent("stateChanged"));
};
