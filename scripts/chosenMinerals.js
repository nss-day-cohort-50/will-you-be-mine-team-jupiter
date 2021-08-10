import {
  getAvailableMinerals,
  getFacilityMinerals,
  getMiningFacilities,
  getTransientState,
} from "./database.js";

// filter >> map(find)
const facilities = getMiningFacilities();
const minerals = getAvailableMinerals();
const facilityMinerals = getFacilityMinerals();

export const FaciltyMinerals = () => {
  const state = getTransientState();

  let html = "<div class='mineral__options'>";

  const filteredMinerals = facilityMinerals.filter((facilityMineral) => {
    facilityMineral.miningFacilityId === facilities.id;
  });
};
