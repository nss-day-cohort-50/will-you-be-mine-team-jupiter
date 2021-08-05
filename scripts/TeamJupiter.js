import { Governors } from "./governors.js";
document.addEventListener("change", (event) => {
  if (event.target.id === "F1") {
    document.getElementById("M1").hidden = false;
    document.getElementById("M2").hidden = true;
    document.getElementById("M3").hidden = true;
    document.getElementById("M4").hidden = true;
  } else if (event.target.id === "F2") {
    document.getElementById("M1").hidden = true;
    document.getElementById("M2").hidden = false;
    document.getElementById("M3").hidden = true;
    document.getElementById("M4").hidden = true;
  } else if (event.target.id === "F3") {
    document.getElementById("M1").hidden = true;
    document.getElementById("M2").hidden = true;
    document.getElementById("M3").hidden = false;
    document.getElementById("M4").hidden = true;
  } else if (event.target.id === "F4") {
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

        <article class="facilities">
            <div class="facility__options">
            <input type="radio" name="facility" id="F1" />
                Facility 1
            </div>
            <div class="facility__options">
            <input type="radio" name="facility" id="F2" />
                Facility 2
            </div>
            <div class="facility__options">
            <input type="radio" name="facility" id="F3" />
                Facility 3
            </div>
            <div class="facility__options">
            <input type="radio" name="facility" id="F4" />
                Facility 4
            </div>
        </article>

        <article class="minerals">
            <div class="mineral__options" id="M1" hidden>
                Mineral Placeholder 1
            </div>
            <div class="mineral__options" id="M2" hidden>
                Mineral Placeholder 2
            </div>
            <div class="mineral__options" id="M3" hidden>
                Mineral Placeholder 3
            </div>
            <div class="mineral__options" id="M4" hidden>
                Mineral Placeholder 4
            </div>
        </article>

        <article class="chosen__minerals">
            <section>
                <h1>Chosen Minerals</h1>
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
