import { Governors } from "./governors.js"


export const TeamJupiter = () => {
    return `
        <header class="header facilities__header">
            <h1 class="title">Active Mining Facilities</h1>
        </header>

        <article class="facilities">
            <div class="facility__options">
                Facility 1
            </div>
            <div class="facility__options">
                Facility 2
            </div>
            <div class="facility__options">
                Facility 3
            </div>
            <div class="facility__options">
                Facility 4
            </div>
        </article>

        <article class="minerals">
            <div class="mineral__options">
                Mineral Placeholder
            </div>
            <div class="mineral__options">
                Mineral Placeholder
            </div>
            <div class="mineral__options">
                Mineral Placeholder
            </div>
            <div class="mineral__options">
                Mineral Placeholder
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


    `
}