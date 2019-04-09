import React from 'react';

const user = (props) => (
  <div>
    <h1>{props.nome}</h1>
    <p>Idade: {props.idade}</p>
    <style jsx>
      {`
        div {
          border: 1px solid #eee;
          box-shadow: 0 2px 3px #ccc;
          padding: 20px;
          text-align: center;
        } 
      `}
    </style>
  </div>
);

export default user;