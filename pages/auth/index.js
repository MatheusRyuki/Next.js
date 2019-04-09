import React from 'react'
import User from '../../components/User';

const paginaAuth = (props) => (
  <div> 
    <h1>Página de Autentificação - {props.appName}</h1>
    <User nome="Matheus" idade={28} />
  </div>
);

paginaAuth.getInitialProps = context => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({appName: 'Super app'})
    }, 1000);
  });

  return promise;
}

export default paginaAuth;