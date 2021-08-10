import {
  getTransientState, setSelectedMineral,
} from "./database.js";

document.addEventListener(
  "click",
  (event) => {
    if (event.target.name === "mineral") {
      setSelectedMineral(parseInt(event.target.value))
      
    }
  }
)

export const ChosenMinerals = () => {
  const state = getTransientState();
  
    
  console.log(state.selectedMinerals)
  return `${state.selectedMinerals}`

  }
