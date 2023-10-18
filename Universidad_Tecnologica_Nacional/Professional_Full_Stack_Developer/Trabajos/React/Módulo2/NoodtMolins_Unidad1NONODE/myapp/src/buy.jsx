import React, {useState} from "react"
function StateBuy (){
    const [Buy, setBuy] = useState('')
  
    return <div>
  <h2>{Buy}</h2>
  <button onClick={()=> setBuy(<h2>Gracias por su compra.</h2>)}>Comprar</button>
    </div>
  }
  export default StateBuy
  
  