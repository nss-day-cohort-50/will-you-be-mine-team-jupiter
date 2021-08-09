import { TeamJupiter } from "./TeamJupiter.js"


const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = TeamJupiter()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})

// Need to only render part of the HTML during governor, facility, and mineral selection. Render all HTML when a purchase is executed.
