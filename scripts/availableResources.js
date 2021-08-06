import { getAvailableResources } from "./database.js";




export const AvailableResources =() => {

    const resources = getAvailableResources()
    
    let html = "<div class='purchased__resources'>"

    const listItems = resources.map(resource => { 
            return `<h3>Name</h3>
                    <ul>
                        ${resource.amount} Tons of (resource name placeholder)
                    </ul>`
    })

    html += listItems.join("")
    html += "</div>"

    return html
}