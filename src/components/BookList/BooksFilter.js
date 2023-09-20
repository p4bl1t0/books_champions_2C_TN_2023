import { useState } from "react"

export default function BooksFilter ({ onYearChange, years }) {
    const [ yearSelected, setYearSelected ] = useState('');
    const yearChangeHandler = (event) => {
        setYearSelected(event.target.value);
        onYearChange(Number(event.target.value));
    }
    return (
        <div>
            <label htmlFor="year">Año de lectura</label>
            <select id="year" value={yearSelected} onChange={yearChangeHandler} >
                <option value={''}></option>
                { years.map((year, index) => (
                    <option key={index} value={year}>{year}</option>
                ))}
            </select>
            <p>Seleccione un año para arrancar a filtrar</p>
        </div>
    )
}