import { Facilities } from "./facilities.js"
import { mineralsAtFacility } from "./minerals.js"
import { Governors } from "./governors.js"


export const TeamJupiter = () => {
    return `
        <header class="header facilities__header">
            <h1 class="title">Active Mining Facilities</h1>
        </header>

        ${Facilities()}

        <article class="minerals">
            ${mineralsAtFacility()}
            ${mineralsAtFacility()}
            ${mineralsAtFacility()}
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


    `
}