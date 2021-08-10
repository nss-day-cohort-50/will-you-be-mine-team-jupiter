import {
  getAvailableMinerals,
  getMiningFacilities,
  getTransientState,
  setMiningFacility,
} from "./database.js";
const facilities = getMiningFacilities();
const state = getTransientState();

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.id.startsWith("facility")) {
    const [, facilityId] = itemClicked.id.split("--");
    setMiningFacility(parseInt(facilityId));
  }
});

export const Facilities = () => {
  const state = getTransientState();

  let html = "<article class='facilities'>";

  const listItems = facilities.map((facility) => {
    return `<div class='facility__options'>
        <button ${
          state.selectedGovernorId > 0 ? "" : "disabled"
        } id="facility--${facility.id}">${facility.name}</button>
        </div>`;
  });

  html += listItems.join(" ");
  html += "</article>";

  return html;
};

// Given the user wants to purchase the chosen minerals
// When the user clicks the "Purchase All Minerals" button (refer to wireframe)
// Then 1 ton of each mineral from each chose facility should be subtracted from the facility's available minerals
// And 1 ton of each chosen mineral should be added to the colony's available minerals
// And the Chosen Materials section should be cleared out

// Given the user wants to purchase the chosen minerals
// When the user clicks the "Purchase All Minerals" button (refer to wireframe)
// Then the available amounts for the facilities should be re-rendered

// Given the user wants to purchase the chosen minerals
// When the user clicks the "Purchase All Minerals" button (refer to wireframe)
// Then the available amounts for the chosen colony should be re-rendered
