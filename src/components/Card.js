import React from "react";
import './Card.css';

export default function Card({ name, url, image, description }) {
    return (
        <div className="card">
            <div className="padd-element">
                <h3 className="title">{ name }</h3>
                <p className="description">{ description }</p>
            </div>
            <img className="project-image" src={ image } alt={ image } />
            <div className="view-link">
                <a className="a-card" href={ url }>Acessar</a>
            </div>
        </div>
    )
}
