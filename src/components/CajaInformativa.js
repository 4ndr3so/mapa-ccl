
import React from 'react'
import PropTypes from 'prop-types';

import "./Mapa.css";

const CajaInformativa = props => {
    return (
        <div className={"cajaInfo"}>
            
            <div className="infoCajaInfo">
            <p className="centroN">{props.centroFor}</p>
            {props.municipio && <p className="mesaF">{props.municipio.toUpperCase()}</p>}
            <p className="centroF">{props.direccion}</p>
            {props.ip && <p className="centroF">IP: {props.ip}</p>}
            <p className="nombreR">{props.nombreR}</p>
            {
               props.correo && <a className="correoF" href={`mailto:${props.correo.toLowerCase()}`}>{props.correo.toLowerCase().replace("mailto:","")}</a>
            }
            
            
            </div>
        </div>
    )
}

CajaInformativa.propTypes = {
    municipio:PropTypes.string,
    correo:PropTypes.string,
    centroFor:PropTypes.string,
    isTop:PropTypes.bool,
    titulo:PropTypes.string,
    indiceM:PropTypes.number,
    direccion:PropTypes.string,
    nombreR:PropTypes.string,
};

export default CajaInformativa
