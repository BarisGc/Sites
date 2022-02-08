import React from 'react'

import { ButtonB } from 'bduibuttons'
import 'bduibuttons/dist/index.css'
// import { ButtonB } from './control'

const App = () => {
  return (
    <>
      <h1 style={{ marginTop: -250 }}>Buttons are imported from <i style={{ color: "red" }}>"bduibuttons"</i> library!</h1>
      {/* <ButtonB type='primary' onClick={(e) => alert(`You clicked the button ${e.target.type}`)}>Primary</ButtonB> */}
      <ButtonB type='primary' onClick={(e) => alert(`You clicked the button primary`)}>Primary</ButtonB>
      {/* <ButtonB type='dashed' value='value' onClick={(e) => alert(`You clicked the button ${ButtonB.type}`)}>Dashed</ButtonB> */}
      <ButtonB type='dashed' value='value' onClick={(e) => alert(`You clicked the button dashed`)}>Dashed</ButtonB>
      <ButtonB type='text' onClick={(e) => alert(`You clicked the button text `)}>Text</ButtonB>
      {/* <ButtonB type='link' onClick={(e) => alert(`You clicked the button ${e.target.value}`)}>www.Link.com</ButtonB> */}
      <ButtonB type='link' onClick={(e) => alert(`You clicked the button link`)}>www.Link.com</ButtonB>
    </>
  )
}

export default App
