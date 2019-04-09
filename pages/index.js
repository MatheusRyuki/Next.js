import React, { Component } from 'react'
import Link from 'next/link';
import Router from 'next/router';


class paginaInicial  extends Component {
  static getInitialProps(context) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({appName: 'Super app'})
      }, 1000);
    });
  
    return promise;
  }
  render() {
    return (
      <div> 
      <h1>Página Principal do {this.props.appName}
      </h1>
      <p>Vá para <Link href="/auth"><a>Autentificação</a></Link></p>
      <button onClick={() => Router.push('/auth')}>Vá para Autentificação</button>
    </div>
    )
  };

};

export default paginaInicial;