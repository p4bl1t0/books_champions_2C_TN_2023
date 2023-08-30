import { useState } from "react";

export default function Contador ({ valorInicial }) {
    const [counter, setCounter ] = useState(valorInicial);
    // counter = counter + 1;
    const aumentarButtonClickHandler = () => {
        // ........
        // https://alexsidorenko.com/react-journey
        // setCounter(counter + 1); // counter = 0
        setCounter(counter => counter + 1);
        // .........
        // setCounter(counter + 1); // counter = 0
        setCounter(function (valorPrevioCounter) {
            return valorPrevioCounter + 1;
        });
    }
    const formatNumber = (number) => {
        return Number(number).toFixed(2);
    }
    return (
        <div>
            <div>Valor: { counter }</div>
            <button onClick={aumentarButtonClickHandler}>Aumentar</button>
        </div>
    );
}