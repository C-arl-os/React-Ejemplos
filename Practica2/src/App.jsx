import { useState } from 'react'

function App() {
    const [contador, setContador] = useState(0)
/*
    const handleContador = (operacion) => {
  if (operacion === 'increment') {
    if(contador <100){
      setContador(contador + 1)
    }
    
  } else if (operacion === 'decrement') {
    if(contador > 0){

      setContador(contador - 1)
    }
  } else if (operacion === 'reset') {
    setContador(0)
  }
}
*/
const operaciones = {
  increment: () => contador < 100  ? contador + 1 : contador,
  decrement: () => contador > 0 ? contador - 1 : contador,
  reset: () => 0
}
const handleContador = (operacion) => {
  setContador(operaciones[operacion]())
}
    return (
        <div>
            <h1>{contador}</h1>
            {contador === 100 && <p>¡Alcanzaste el máximo!</p>}
            {contador === 0 && <p>¡Has llegado al mínimo!</p>}
            <button onClick={() => handleContador('increment')}>+</button>
            <button onClick={() => handleContador('decrement')}>-</button>
            <button onClick={() => handleContador('reset')}>Reset</button>
        </div>
    )
}

export default App