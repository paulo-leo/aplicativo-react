import React from "react";

export default function Btn(){

    
   function eu(){

     alert('Botão clicado');

   }

    return (<button class="teste" onClick={eu}>Clique</button>);


}