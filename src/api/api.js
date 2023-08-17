import $ from 'jquery';

const url = "./assets/items.xml";  
const getUrl=function(){
    var loc1=window.location;
    var str = ""+loc1;
    var n = str.indexOf("/Empresarios");
    console.log(str.slice(0,n+12))
    return str.slice(0,n+12)
}


//const url = getUrl()+"/_api/web/lists/getbytitle('lideres_CCL')/items?$select=Title,Codigo,DESCRIPCIoN_CENTRO_DE_COSTO,Created,DIRECCIoN,FileLeafRef,MUNICIPIO,File_x0020_Type,EncodedAbsUrl,Id,IP,NOMBRES_APELLIDOS,CORREO_SENA&$top=500&$orderby=Title%20asc";


 //const url = "https://www.sena.edu.co/es-co/Empresarios/_api/web/lists/getbytitle('lideres_CCL')/items?$select=Title,Codigo,DESCRIPCIoN_CENTRO_DE_COSTO,Created,DIRECCIoN,FileLeafRef,MUNICIPIO,File_x0020_Type,EncodedAbsUrl,Id,IP,NOMBRES_APELLIDOS,CORREO_SENA&$top=500&$orderby=Title%20asc";
   
export var apijsonConvo =()=> fetch(url)
                .then(response => response.text())
                .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
                .then(data => data)


export var apijsonConvoJquey=(resl,erro)=> $.ajax({
                    url:url,
                    method: "GET",
                    dataType: "xml"
                   ,  
                    success: function(data) {
                        const objetoRes={}
                        const datos=[]

                      //  var properties=data.getElementsByTagName("m:properties")[0]
                        //console.log(properties) 
                    $(data).find("entry").each(function (t) { // or "item" or whatever suits your feed
                        var el = $(this);
                         datos.push({
                            "id":el[0].getElementsByTagName("d:Id")[0].childNodes[0].nodeValue,          
                            "fecha":el[0].getElementsByTagName("d:Created")[0].childNodes[0].nodeValue,  
                            "regional":el[0].getElementsByTagName("d:Title")[0].childNodes[0] && el[0].getElementsByTagName("d:Title")[0].childNodes[0].nodeValue, 
                            "codigo":el[0].getElementsByTagName("d:Codigo")[0].childNodes[0] && el[0].getElementsByTagName("d:Codigo")[0].childNodes[0].nodeValue, 
                            "municipio":el[0].getElementsByTagName("d:MUNICIPIO")[0].childNodes[0] && el[0].getElementsByTagName("d:MUNICIPIO")[0].childNodes[0].nodeValue, 
                            "nombreCentro":el[0].getElementsByTagName("d:DESCRIPCIoN_CENTRO_DE_COSTO")[0].childNodes[0] && el[0].getElementsByTagName("d:DESCRIPCIoN_CENTRO_DE_COSTO")[0].childNodes[0].nodeValue, 
                            "direccion":el[0].getElementsByTagName("d:DIRECCIoN")[0].childNodes[0] && el[0].getElementsByTagName("d:DIRECCIoN")[0].childNodes[0].nodeValue,
                            "nombres":el[0].getElementsByTagName("d:NOMBRES_APELLIDOS")[0].childNodes[0] && el[0].getElementsByTagName("d:NOMBRES_APELLIDOS")[0].childNodes[0].nodeValue ,
                            "correo":el[0].getElementsByTagName("d:CORREO_SENA")[0].childNodes[0] && el[0].getElementsByTagName("d:CORREO_SENA")[0].childNodes[0].nodeValue ,
                            "ip":el[0].getElementsByTagName("d:IP")[0].childNodes[0] && el[0].getElementsByTagName("d:IP")[0].childNodes[0].nodeValue ,
                        }) 

                     
                    });
                    objetoRes.datos=datos;
                   // console.log(objetoRes.datos);
                    resl( objetoRes);
                },                 
                    error: function(t) {
                        erro(t)
                    }
                })