import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import './SegundoGrau.css';

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
            <Header />
            <div className="page-body-segundo">
                <div className="card-calculator-second">
                    <h1>Equação de Segundo Grau</h1>
                    <form className="form-calculator">
                        <label htmlFor="ptermo">1º Termo:</label>
                        <input type="number" id="ptermo" name="ptermo" placeholder="1" defaultValue={ 1 } onChange={ (e) => handleChange(e, setPrimeiroTermo) } />
                        <label htmlFor="stermo">2º Termo:</label>
                        <input type="number" id="stermo" name="stermo" placeholder="1" defaultValue={ 1 } onChange={ (e) => handleChange(e, setSegundoTermo) } />
                        <label htmlFor="ttermo">3º Termo:</label>
                        <input type="number" id="ttermo" name="ttermo" placeholder="1" defaultValue={ 1 } onChange={ (e) => handleChange(e, setTerceiroTermo) } />
                    </form>
                    <p className="text-description-segundo">{primeiroTermo}x² + {segundoTermo}x + {terceiroTermo} = 0</p>
                    <p className="text-description-segundo">Δ = { delta }</p>
                    <p className="text-description-segundo" hidden={ !numeroImaginario }>Delta negativo.</p>
                    <p className="text-description-segundo" hidden={ numeroImaginario }>x1 = { x1 }</p>
                    <p className="text-description-segundo" hidden={ numeroImaginario }>x2 = { x2 }</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}
