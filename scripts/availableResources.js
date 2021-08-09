import { getAvailableMinerals, getAvailableResources, getColonies, getGovernors, getTransientState } from "./database.js";


// FIND governor id
// FIND colony id
// FILTER mineral id
// MAP available resources


const governors = getGovernors()
const colonies = getColonies()
const minerals = getAvailableMinerals()
const resources = getAvailableResources()

export const AvailableResources =() => {

    const state = getTransientState()
    
    const foundGovernor = governors.find(
        (governor) => {
            return state.selectedGovernorId === governor.id
        }
        ) 
        console.log(foundGovernor)
        
        
        if (foundGovernor !== undefined) {
            
            const foundColony = colonies.find( 
                (colony) => {
                    return foundGovernor.colonyId === colony.id
                }
                )
                
                if (foundGovernor !== undefined) {
                    
                    const foundAvailableResources = resources.find( 
                        (resource) => {
                            return foundColony.id === resource.colonyId
                        }
                        )
                        console.log(foundAvailableResources.amount)
                        
                        
                    if (foundGovernor !== undefined) {

                        const listItems = resources.map((resource) => ({ ...resource }))

                        if (listItems.colonyId === foundColony.id) {
                            
                            console.log(foundColony.name)
    
                            
                            // const returnedResourceList = 
                            //         <h3>${foundColony.name}</h3>
                            //         <li>
                            //             ${listItems.amount} Tons of 
                            //         </li>`
                                        
                            // html += returnedResourceList
                            // html += "</ul>"
                    
                        }


            }
        }

    } 
    






    // if (foundColony !== undefined) {
    //     console.log("hi")
    // }

    // const foundColonyName = colonies.find(
    //     (colony) => {
    //     return colonyName === colony.name
    // })

    // const mineralName = minerals.filter(mineral => mineral.name === mineralName)


}