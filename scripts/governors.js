import { getGovernors, setGovernor, getTransientState } from "./database.js";


const governorsArray = getGovernors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "governors") {
            setGovernor(parseInt(event.target.value))
           
           
        }

    }
)


// ---- Dropdown List For Governor Selection ---- \\


export const Governors = () => {
    const state = getTransientState()
    
    let html = "<ul>"

    const listItems = governorsArray.map(governor => {
        if (governor.isActive === true) {

            if (governor.id === state.selectedGovernorId) {
                return `<ul>
                    <option value="${governor.id}" selected >${governor.name}</option>
                    </ul> `
            } else {

                return `<ul>
                <option value="${governor.id}" >${governor.name}</option>
                </ul> `
            }
        }
    })

    html += listItems.join("")
    html += "</ul>"

    return html
}





















