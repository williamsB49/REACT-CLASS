import React,{createContext,useContext,useState} from "react";
// Create context 
const Animalcontext =createContext()
//Create a component that will provide the context 
function Animalprovider({children}) {
    const [Animalsound,setAnimalsound]=useState('dog dog wow wow rrrrrr!!!!')
     return(
        <Animalcontext.Provider value={{Animalsound,setAnimalsound}}>
            {children}
        </Animalcontext.Provider>
     )
}// Export the create context,and componet 
export {Animalcontext,Animalprovider}