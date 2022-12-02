import React, { useState } from "react";

export default function Logaritmo() {
    const [primeiroTermo, setPrimeiroTermo] = useState(10)
    const [segundoTermo, setSegundoTermo] = useState(10)

    const handleChange = ({ target: t }, func) => {
        func(t.value)
    }

    const getBaseLog = (x, y) => {
        return Math.log(y) / Math.log(x);
      }

    return (
        <div>
            <h1>Logaritmo</h1>
            <form>
                <label htmlFor="logy">Log Y:</label>
                <input type="number" id="logy" name="logy" placeholder="1" defaultValue={ 10 } min={ 1 } onChange={ (e) => handleChange(e, setPrimeiroTermo) } />
                <label htmlFor="basex">Base X:</label>
                <input type="number" id="basex" name="basex" placeholder="1" defaultValue={ 10 } min={ 2 } onChange={ (e) => handleChange(e, setSegundoTermo) } />
                <p>log<sub>{ segundoTermo }</sub>{ primeiroTermo } = { getBaseLog(segundoTermo, primeiroTermo) }</p>
            </form>
        </div>
    )
}
