import React, { useState } from 'react';

import { Navbar } from './component/Navbar';

import backgroundsplash from "../../assets/carbeep.png"
import ModalLogin from './component/modalLogin/ModalLogin';
import "./styles.css";


function LOGIN() {

  const [visibleModal,setVisibleModal] = useState(false);

  return (
    <div>
      <Navbar functionButton={() => setVisibleModal(true)} />
      <img className="background-style" src= {backgroundsplash}></img> 
      <h1 className="texto">Seja bem-vindo ao Dashboard</h1> 
      <h1 className="texto2">beepbeep</h1>
      {
        visibleModal && 
        <ModalLogin
          functionCloseModal={setVisibleModal}
        />
      }
    </div> 
  );
}

export default LOGIN;