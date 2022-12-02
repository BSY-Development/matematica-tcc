import React from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import './Home.css';

export default function Home() {
    const cardData = [
        {
            name: "Equação de Primeiro Grau",
            url: "/primeiro",
            image: "https://s2.static.brasilescola.uol.com.br/be/2022/07/equacao-do-primeiro-grau.jpg",
            description: "Equação de 1º grau com uma incógnita é uma expressão algébrica que segue o formato ax + b = 0. Elas podem ser muito úteis para traduzir problemas matemáticos em uma linguagem numérica." 
        },
        {
            name: "Equação de Segundo Grau",
            url: "/segundo",
            image: "https://s3.static.brasilescola.uol.com.br/be/2020/03/shutterstock-355155302.jpg",
            description: "A equação do segundo grau recebe esse nome porque é uma equação polinomial cujo termo de maior grau está elevado ao quadrado." 
        },
        {
            name: "Logaritmo",
            url: "/logaritmo",
            image: "http://www.brasilescola.com/upload/conteudo/images/6c16e40c28237df0e5759c99e569262c.jpg",
            description: "O logaritmo de um número é o expoente a que outro valor fixo, a base, deve ser elevado para produzir este número." 
        }
    ]
    return (
        <>  
            <Header />
            <div className="home-div">
                { cardData.map(({ name, url, image, description }, i) => <Card name={ name } url={ url } image={ image } description={ description } key={ i } />) }
            </div>
            <Footer />
        </>
    )
}
