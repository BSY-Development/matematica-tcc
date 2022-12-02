import React, { useEffect, useState } from "react";

export default function SegundoGrau() {
    const [primeiroTermo, setPrimeiroTermo] = useState(1)
    const [segundoTermo, setSegundoTermo] = useState(1)
    const [terceiroTermo, setTerceiroTermo] = useState(1)
    const [numeroImaginario, setNumeroImaginario] = useState(true)

    const handleChange = ({ target: t }, func) => {
        func(t.value)
    }

    const calculateDelta = () => {
        const delta = Math.pow(segundoTermo, 2) - 4 * primeiroTermo * terceiroTermo
        return delta
    }
    const delta = calculateDelta()

    useEffect(() => {
        const teste = () => {
            if (delta < 0) {
                setNumeroImaginario(true)
            } else if (delta > 0) {
                setNumeroImaginario(false)
            }
        }
        teste()
    }, [delta])

    const calculateX1X2 = () => {
        const x1 = (segundoTermo * (-1) + Math.sqrt(delta)) / (2 *primeiroTermo)
        const x2 = (segundoTermo * (-1) - Math.sqrt(delta)) / (2 *primeiroTermo)
        if (isNaN(x1) || isNaN(x2)) {
            return { x1: "O primeiro termo precisa ser diferente de zero", x2: "O primeiro termo precisa ser diferente de zero" };
        } else {
            return { x1, x2 }
        }
    }

    const { x1, x2 } = calculateX1X2()
    return (
        <div>
            <h1>Equação de Primeiro Grau</h1>
            <form>
                <label htmlFor="ptermo">1º Termo:</label>
                <input type="number" id="ptermo" name="ptermo" placeholder="1" defaultValue={ 1 } onChange={ (e) => handleChange(e, setPrimeiroTermo) } />
                <label htmlFor="stermo">2º Termo:</label>
                <input type="number" id="stermo" name="stermo" placeholder="1" defaultValue={ 1 } onChange={ (e) => handleChange(e, setSegundoTermo) } />
                <label htmlFor="ttermo">3º Termo:</label>
                <input type="number" id="ttermo" name="ttermo" placeholder="1" defaultValue={ 1 } onChange={ (e) => handleChange(e, setTerceiroTermo) } />
            </form>
            <p>{primeiroTermo}x² + {segundoTermo}x + {terceiroTermo} = 0</p>
            <p>Δ = { delta }</p>
            <p hidden={ !numeroImaginario }>Delta negativo, tratando como número imaginário.</p>
            <p hidden={ numeroImaginario }>x1 = { x1 }</p>
            <p hidden={ numeroImaginario }>x2 = { x2 }</p>
        </div>
    )
}
