import React from 'react';

export default function Interface() {

  const handleClick = () => {
    alert('Aplicação ainda em Desenvolvimento!');
  };



  return (
    
    
    <body>

      {/* Biblioteca Material Symbol */}
      {  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />  }

      <div className="sidebar">

      </div>

      <div className="interface">
      <header>
        
        <div className="brilhante">

          <div className="menu-suspenso">
            <span className="material-symbols-outlined">menu</span>
          </div>
          <div className="pyramid-loader">
            <div className="wrapper">
              <span className="side side1"></span>
              <span className="side side2"></span>
              <span className="side side3"></span>
              <span className="side side4"></span>
              <span className="shadow"></span>
            </div>
          </div>
          <span>META CASINO</span>
          
        </div>
        <div className="menu">Menu</div>
        <div className="dinheiro">
          <div className="saldo">
            <div className="moeda">R$</div>
            <div className="valor">1.200,34</div>
            <div className="opcao-moeda">
              <select>
                <option value=""></option>
                <option value="opcao1">BRL</option>
                <option value="opcao2">USD</option>
                <option value="opcao3">EUR</option>
              </select>
            </div>
          </div>
          <div className="depositar">Depositar</div>
        </div>
      </header>
        
      <div className="banner"></div>
     

      <button className="btn start-btn" type="button" onClick={handleClick}>
        <strong>START</strong>
        <div id="container-stars">
          <div id="stars"></div>
        </div>

        <div id="glow">
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </button>
    </div>

    <div className="leftbar"></div>
    </body>
  );
  
}
