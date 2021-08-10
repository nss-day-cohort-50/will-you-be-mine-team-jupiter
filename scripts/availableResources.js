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
            

            const foundAvailableResources = resources.find( 
                (resource) => {
                    return foundColony.id === resource.colonyId
                }
                )
                console.log(foundAvailableResources.amount)

            const foundMineral = minerals.find(
                (mineral) => {
                return foundAvailableResources.mineralId === mineral.id
                })
                    
        return `<h3>${foundColony.name}</h3>
                <li>
                    ${foundAvailableResources.amount} Tons of ${foundMineral.name}
                </li>`

        } else {
            return ``
        }
}
    

