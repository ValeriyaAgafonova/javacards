import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import hyperCards from './cards';
import Card from './Card'

const themes = ['картошки Hibernate', 'Многопоточность многопоточна', 'Паттерны хуятерны', 'полный хардCORE ', 'Spring хорошее время года', 'SQL и где они обитают']
function App() {
  const [isOpen, setOpen] = useState(true)
  const [isHyper, setHyper] = useState(false)
  function closeMenu(e){
    setOpen(false)
    console.log(e.target.textContent)
    if (e.target.textContent === 'картошки Hibernate'){
   setHyper(true)
    }
  }
  function returnClick(){
    setHyper(false)
    setOpen(true)
  }
  return (
<div className='App'>
  {!isOpen && <button className='backButton' onClick={returnClick}>темы</button>}
  {isOpen &&  <div className="menu">
      <h1>Темы</h1>
     {themes.map( theme => <button className='theme-button' key={theme} onClick={closeMenu}>{theme}</button>)}
    </div>}
   {isHyper &&  hyperCards.map((card) => <Card question={card.q} answer={card.a} img={card.img} key={card.q}/>)}
    </div>
  );
}

export default App;
