import React from 'react'
import  './AtualizarItem.css'
import {BrowserRouter, Route} from 'react-router-dom'



function  AtualizarItem() {
    return (
        
       <div className="body"> 
        

              <div className="title">
                <h1>Atualizar Item</h1>
            </div>   

            <div className="nome">
                <h4>Nome</h4>
                <input type="text">
                </input>  
            
         </div>

         <div className="Descrição">
                <h4>Descrição</h4>
                <input type="text">
                </input> 
        </div>

        <div className="Valor">
                <h4>Valor</h4>
                <input type="text">
                </input> 
        </div>
        
        
        <div className="Status">
                <h4>Status</h4>
                <input type="text">
                </input> 
        </div>

            
                <button className="butom1">Cancelar</button>                
                 <button className="butom2">Adicionar</button>
            
        </div>
            
       

        

        // </Route>
        // {//* </BrowserRouter> */}
    )
}
export default AtualizarItem;