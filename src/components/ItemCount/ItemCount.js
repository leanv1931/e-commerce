
import { useEffect, useState } from 'react';



const ItemCount= (props) => {

    const [contador, setContador] = useState(0)

    useEffect(() => {
         console.log('soy el useEffect que se ejecuta cuando el componente se monta y cuando el estado contador cambia')
    }, [contador])


    const increment = () => {
      setContador(prev => prev + 1)
    }
  
    const decrement = () => {
      setContador(prev => prev - 1)
    }

    const reset = () => {
      setContador(0)
    }



    return (

        <>
            <p>Contador: {contador}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={reset}>Resetear</button>
        </>
      );

}

export default ItemCount;