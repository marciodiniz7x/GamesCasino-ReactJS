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

          <span>META CASINO</span>
          <div className="pyramid-loader">
            <div className="wrapper">
              <span className="side side1"></span>
              <span className="side side2"></span>
              <span className="side side3"></span>
              <span className="side side4"></span>
              <span className="shadow"></span>
            </div>
          </div>
          
          
        </div>
        <div className="menu">
        <form className={`
          flex align-middle justify-center gap-2
        `}>
          <input type="text" name="search" placeholder='Pesquisar Jogos' className={`
            rounded-sm bg-[#2c0477] outline-none w-60 text-center
          `} />
          <button type="submit">
            <span className="material-symbols-outlined">
            search
            </span>
          </button>
        </form>

        </div>
        <div className="dinheiro">
          <div className="saldo">
            <div className={
              `flex justify-center align-middle
              w-7 rounded-md text-[#000]
              bg-[#35EF7B]`
              }>R$</div>
            <div className='valor'>1.200,34</div>
            <div>
            <span className="material-symbols-outlined">
              settings
            </span>
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
