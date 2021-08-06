import { getGovernors, setGovernor } from "./database.js";

const governors = getGovernors()





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
    let html = "<ul>"




    const listItems = governors.map(governor => {
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




















