import React from 'react'
import PropTypes from 'prop-types'
import CajaInformativa from './CajaInformativa';
import { useSelector } from 'react-redux';
import SeparadorMap from './SeparadorMap';
const ModalMap = props => {
    const dataSelect = useSelector(state => state.datosSelecionados);
        let tempGuia=""
          return (
              <div
              className="modal fade"
              id="modalMapa"
    
              role="dialog"
              aria-labelledby="exampleModalLongTitle"
              aria-hidden="true"
            >
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    
                          
                    
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true" >&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                      {
                            
                            dataSelect[0] && <SeparadorMap titulo={dataSelect[0].regional} indi={0}></SeparadorMap>
                        }
                        {  
                        Object.entries(dataSelect).map((c,index )=> {
                            // console.log(c)
                                return <CajaInformativa isTop={true} key={c[1]["id"]} municipio={c[1]["municipio"]} correo={c[1]["correo"]} centroFor={c[1]["nombreCentro"]} titulo={c[1]["regional"]} direccion={c[1]["direccion"]} ip={c[1]["ip"]}  nombreR={c[1]["nombres"]}  indiceM={index}></CajaInformativa>              
                             })
                    
                          
                       //<CajaInformativa key={r["Mesa Sectorial"]} MesaSec={r["Mesa Sectorial"]} correo={r["Correo Mesa Sectorial"]} centroFor={r["Centro de Formación"]}></CajaInformativa>
                          
                      }
                      </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-dark"
                      data-dismiss="modal"
                    >
                      Cerrar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
}


ModalMap.propTypes = {
    datosSelecionados:PropTypes.object,
    nuevosDatos:PropTypes.array,
};

export default ModalMap


