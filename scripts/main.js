import { TeamJupiter } from "./TeamJupiter.js"


const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = TeamJupiter()
}

renderAllHTML()