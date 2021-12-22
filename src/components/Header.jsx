import React from "react";
import { AiOutlineSearch, AiOutlineMenu } from 'react-icons/ai';
import { MdKeyboardArrowDown } from 'react-icons/md';
import '../styles/Header.css';

const Header = () => (
  <header>
    <div className="">
      <button type="button"><AiOutlineMenu /></button>
      <div>
        <button type="button">Opções de entrega <MdKeyboardArrowDown /></button>
        <h5>Insira um endereço aqui...</h5>
      </div>
    </div>
    <div>
      <button type="button"><AiOutlineSearch /></button>
    </div>
  </header>
);

export default Header;
