import React, { Fragment } from 'react';
import Home from './Home';

export default function Teste(props)
{
    let nome = props.nome;
    return(<><h1>{nome == 10 ? '10' : 'não é 10'}</h1><Home title="Aprendendo react"/></>);

}