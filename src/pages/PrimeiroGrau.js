import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import './PrimeiroGrau.css';

export default function PrimeiroGrau() {
    const [primeiroTermo, setPrimeiroTermo] = useState(1)
    const [segundoTermo, setSegundoTermo] = useState(1)
    const [terceiroTermo, setTerceiroTermo] = useState(1)

    const handleChange = ({ target: t }, func) => {
        func(t.value)
    }

    return (
        <div>
            <Header />
            <div className="page-body">
                <div className="card-calculator">
                    <h1>Equação de Primeiro Grau</h1>
                    <form className="form-calculator">
                        <label htmlFor="ptermo">1º Termo:</label>
                        <input type="number" id="ptermo" name="ptermo" placeholder="1" defaultValue={ 1 } onChange={ (e) => handleChange(e, setPrimeiroTermo) } />
                        <label htmlFor="stermo">2º Termo:</label>
                        <input type="number" id="stermo" name="stermo" placeholder="1" defaultValue={ 1 } onChange={ (e) => handleChange(e, setSegundoTermo) } />
                        <label htmlFor="ttermo">3º Termo:</label>
                        <input type="number" id="ttermo" name="ttermo" placeholder="1" defaultValue={ 1 } onChange={ (e) => handleChange(e, setTerceiroTermo) } />
                    </form>
                    <p className="text-description">{primeiroTermo}x + {segundoTermo} = {terceiroTermo}</p>
                    <p className="text-description">x = {(terceiroTermo - segundoTermo) / primeiroTermo}</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}
