import React from "react";
import '../hojas-de-estilo/Testimonio.css'


export function Testimonio(props){
    return(
        <div className='contenedor-testimonio'>
            <img className="imagen-testimonio" 
                 src={props.image} 
                 alt="Testimonio foto" />
            <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio"><strong>{props.nombre}</strong> de {props.pais}</p>
                <p className="cargo-testimonio">{props.cargo} en <strong>{props.empresa}</strong></p>
                <p className="texto-testimonio">{props.texto}</p>
            </div>
        </div>
    );
}





