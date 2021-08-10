import {
  getAvailableMinerals,
  getFacilityMineralStocks,
  getTransientState,
  setSelectedMineral,
} from "./database.js";
const availableMinerals = getAvailableMinerals();
const facilityMineralStocks = getFacilityMineralStocks();



export const mineralsAtFacility = () => {
  const state = getTransientState();

  const foundMineralStock = facilityMineralStocks.find((stock) => {
    return state.selectedFacilityId === stock.id;
  });

  console.log(state.selectedFacilityId);
  if (state.selectedFacilityId !== 0) {
    const foundMineral = availableMinerals.find((mineral) => {
      return mineral.id === foundMineralStock.mineralId;
    });
    return `<div class="mineral__options">
            <input type="radio" name="mineral" id="mineral--${foundMineral.id} value="${foundMineral.id}" /> ${foundMineral.name} x${foundMineralStock.availableStock}
            </div>`;
  } else {
    return `<div class="mineral__options">
            </div>`;
  }
};
