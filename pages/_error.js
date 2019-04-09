import React from 'react'
import Link from 'next/link';
import Router from 'next/router';


const paginaErro = () => (
  <div> 
    <h1>Ops, Algo deu errado!</h1>
    <p>Tente<Link href="/"><a> Voltar!</a></Link></p>
  </div>
);

export default paginaErro;