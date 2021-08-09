import { getAvailableMinerals, getAvailableResources, getColoniesz, getGovernors } from "./database.js";




export const AvailableResources =() => {
    const resources = getAvailableResources()
    const colonies = getColonies()
    const minerals = getAvailableMinerals()

    let html = "<div class='purchased__resources'>"

    // const colonyNameFinder = colonies.find(colony => {
    //     colony.name === colonyName
    // })
    // const mineralNameFinder = minerals.find(mineral => {
    //     mineral.name === mineralName
    // })

    const listItems = resources.map(resource => {
                return `<h3>(Colony Name)</h3>
                        <ul>
                            ${resource.amount} Tons of (mineral name)
                        </ul>`
                }
                
        )
    html += listItems.join("")
    html += "</div>"

    return html
}