import { useState, useEffect } from "react";

const Contador = () => {
    const [contador, setContador] = useState(0);

    const handleContadorAumentar = () => {
        setContador(contador + 1);
    };

    const handleContadorDisminuir = () => {
        setContador(contador - 1);
    };

    // Se haya montado
    useEffect(() => {
        setContador(12);
    }, []);

    // contador cambio de estado
    useEffect(() => {
        if(contador === 15) {
            alert('contador es 15');
        }
    }, [contador]);

    // Se desmonto
    useEffect(() => {
        return () => {
            console.log('El componente se desmonto');
        }
    }, []);

    return (
        <>
            <h1>Componente Contador</h1>
            <h3>{contador}</h3>
            <div>
                <button onClick={handleContadorAumentar}>Aumentar</button>
                <button onClick={handleContadorDisminuir}>Disminuir</button>
            </div>
        </>
    );
};

export default Contador;