import { getGovernors, setGovernor } from "./database.js";

const governorsArray = getGovernors()


// ---- Dropdown List For Governor Selection ---- \\


export const Governors = () => {
    let html = "<ul>"

    const listItems = governorsArray.map(governor => {
        if (governor.isActive === true) {
            return `<ul>
                    
                    <option value="${governor.id}">${governor.name}</option>
                    
                    </ul> `
        }
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}





















