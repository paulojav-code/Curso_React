import React from 'react'
import { createRoot } from 'react-dom/client'

// Los componentes deben ser PascalCase

const Button =  ({nameButton}) => {
    return <button>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
  {nameButton}</button>
}

// createRoot(document.getElementById('root')).render(
//   <React.Fragment>
//     <button>Boton 1</button>
//     <button>Boton 2</button>  //Esto es imperativamente 
//     <button>Boton 3</button>
//   </React.Fragment>
// )

createRoot(document.getElementById('root')).render(
  //Se debe de escribir Button en pascal case por que si no no lo reconoce como un componente
  <React.Fragment>
    <Button nameButton={"Boton 1"}/>
    <Button nameButton={"Boton 2"}/>  {/*Esto esusando un componente*/}
    <Button nameButton={"Boton 3"}/>
  </React.Fragment>
)
