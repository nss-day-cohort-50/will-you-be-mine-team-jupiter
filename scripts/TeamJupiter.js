import { Facilities } from "./facilities.js";
import { mineralsAtFacility } from "./minerals.js";
import { Governors } from "./governors.js";
import { AvailableResources } from "./availableResources.js";
import { getTransientState } from "./database.js";
import { ChosenMinerals } from "./chosenMinerals.js";

const state = getTransientState();

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.id.startsWith("facility")) {
    const [, facilityId] = itemClicked.id.split("--");
    if (state.selectedFacilityId === parseInt(facilityId)) {
      mineralsAtFacility();
    }
  }
});

export const TeamJupiter = () => {
  return `
        <header class="header facilities__header">
            <h1 class="title">Active Mining Facilities</h1>
        </header>

        ${Facilities()}

        <article class="minerals">
          ${mineralsAtFacility()}
        </article>

        <article class="chosen__minerals">
            <h1>Chosen Minerals</h1>
            <section>
                <div class="chosen__list">
                    ${ChosenMinerals()}
                </div>
            </section>
            <section class="purchase__button">
                <button id="purchase">Purchase all minerals</button>
            </sections>
        </article>

        <article class="governors__colonies">
            <section class="governors">
                <div>
                    Choose Governor
                </div>

                    
                <div class="governors__dropdown">
                <select name="governors" id="governors">
                    <option value="" >Choose a governor...</option>
                     ${Governors()}
                    </select>
                </div>
                
            </section>
            <section class="available__resources">
                <div class="purchased__resources">
                    ${AvailableResources()}
                </div>
            </section>
        </article>

        <article>
        </article>


    `;
};
