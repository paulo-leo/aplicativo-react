import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../Pages/Home';
import Sobre from '../Pages/Sobre';
import Error from '../Pages/Error';

export default function MyRoutes()
{

   return(
      <BrowserRouter>
           <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/sobre' element={<Sobre />} />
           <Route path="*" element={<Error />} />
           </Routes>
       </BrowserRouter>
   );
}