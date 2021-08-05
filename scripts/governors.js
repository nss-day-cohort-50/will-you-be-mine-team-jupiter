import { getGovernors, setGovernor } from "./database.js";

const governors = getGovernors()










// ---- Dropdown List For Governor Selection ---- \\


export const Governors = () => {
    let html = "<ul>"
        
            
                
                
                const listItems = governors.map(governor =>  {
                    return `<ul>
                    
                    <option value="${governor.id}">${governor.name}</option>
                    
                    </ul> `
                })    
                
                
                
                
                
    html += listItems.join("")
    html += "</ul>"

    return html
}




















