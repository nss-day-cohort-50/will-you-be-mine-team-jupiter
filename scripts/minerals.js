import { getAvailableMinerals } from "./database.js"

const availableMinerals = getAvailableMinerals()

export const mineralsAtFacility = () => {

    let html = "<div class='mineral__options'>"

    const listItems = availableMinerals.map(mineral => {
        return `<ul>
        <input type="radio" name="mineral" value="${mineral.id}"/> ${mineral.name}
        </ul>`
    })

    html += listItems.join(" ")
    html += "</div>"

    return html
    } 