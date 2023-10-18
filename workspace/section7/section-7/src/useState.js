import { useState } from 'react'


const useContador = (inicial) => {
    const [contador, setContador] = useState(inicial) //Aquí se pega la lógica para darle ese estándar de Hook.
    const incrementar = () => {
        setContador(contador + 1)
    }
    return [contador, incrementar]
}


    const App = () => {
        const [contador, incrementar] = useContador(0)
        return (
            <div> 
                contador: {contador}
                <button onClick={incrementar}>Incrementar</button>
            </div>
        )
    }


// const App = () => {
//     const  [contador, setContador] = useState(0)
//     return (
//         <div>
//             Contador: {contador}
//             <button onClick={() => setContador(contador + 1)}>Incrementar</button>
//         </div>
//     )
// }




export default useState