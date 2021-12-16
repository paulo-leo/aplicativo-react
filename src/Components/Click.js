import React,{ useState } from 'react';

const Click = () =>{

/*Declara um hook com início de 0*/
const [count, setCount] = useState(100);

return(<>
     <h1>Contador:{count}</h1>
     <button className="btn btn-sm btn-outline-success" onClick={()=>{ setCount(count-1); }}>Clique aqui!</button>
</>);

}

export default Click;