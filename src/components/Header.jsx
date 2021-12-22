import React from "react";
import { AiOutlineSearch } from 'react-icons/ai';
import '../styles/Header.css';

const Header = () => (
  <header>
    <div>
      <button type="button">Menu</button>
      <div>
        <button type="button">Opções de entrega</button>
        <h5>Insira um endereço aqui...</h5>
      </div>
    </div>
    <div>
      <button type="button"><AiOutlineSearch /></button>
    </div>
  </header>
);

export default Header;
