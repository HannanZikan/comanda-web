import React from 'react'
import  './RegistrarPagamento.css'
import {BrowserRouter, Route} from 'react-router-dom'



function  RegistrarPagamento() {
    return (
        
       <div className="body"> 
        
            <div className="title">
                <h1>Registrar Pagamento</h1>
            </div>
            
             <h4 className="txt">Código da Comanda</h4>  
             <div className="pesq">
               
              <input type="text">
                  
              </input>  
              </div> 

              <button className="buton-1">Cancelar</button>                
              <button className="buton-2">Registrar Pagamento</button>
             
             </div>
        // </Route>
        // {//* </BrowserRouter> */}
    )
}
export default RegistrarPagamento;