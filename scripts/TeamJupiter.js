import { Facilities } from "./facilities.js"
import { mineralsAtFacility } from "./minerals.js"
import { Governors } from "./governors.js"

document.addEventListener("change", (event) => {
  if (event.target.value === "1") {
    document.getElementById("M1").hidden = false;
    document.getElementById("M2").hidden = true;
    document.getElementById("M3").hidden = true;
    document.getElementById("M4").hidden = true;
  } else if (event.target.value === "2") {
    document.getElementById("M1").hidden = true;
    document.getElementById("M2").hidden = false;
    document.getElementById("M3").hidden = true;
    document.getElementById("M4").hidden = true;
  } else if (event.target.value === "3") {
    document.getElementById("M1").hidden = true;
    document.getElementById("M2").hidden = true;
    document.getElementById("M3").hidden = false;
    document.getElementById("M4").hidden = true;
  } else if (event.target.value === "4") {
    document.getElementById("M1").hidden = true;
    document.getElementById("M2").hidden = true;
    document.getElementById("M3").hidden = true;
    document.getElementById("M4").hidden = false;
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
                    Chosen Minerals Placeholder
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
                    <option value=""  selected >Choose a governor...</option>
                     ${Governors()}
                    </select>
                </div>
                
            </section>
            <section class="available__resources">
                <h1>Available Resources for Colony</h1>
                <div class="purchased__resources">
                    Available Resources Placeholder
                </div>
            </section>
        </article>

        <article>
        </article>


    `;
};
