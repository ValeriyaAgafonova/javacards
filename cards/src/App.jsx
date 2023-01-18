import React, { useState } from 'react';

import './App.css';
import hyperCards from './cards';
import Card from './Card'
import { potoks } from './cards';
import { patterns } from './cards';
import { core } from './cards';
import { spring } from './cards';
import { sql } from './cards';
const themes = ['картошки Hibernate', 'Многопоточность многопоточна', 'Паттерны хуятерны', 'полный хардCORE ', 'Spring хорошее время года', 'SQL и где они обитают']
function App() {
  const [isOpen, setOpen] = useState(true)
  const [isHyper, setHyper] = useState(false)
  const [isPotok, setPotok] = useState(false)
  const [isPattern, setPattern] = useState(false)
  const [isCore, setCore] = useState(false)
  const [isSpring, setSpring] = useState(false)
  const [isSql, setSql] = useState(false)
  function closeMenu(e){
    setOpen(false)
    console.log(e.target.textContent)
    if (e.target.textContent === 'картошки Hibernate'){
   setHyper(true)
    }
    else if(e.target.textContent === 'Многопоточность многопоточна'){
setPotok(true)
    }
    else if(e.target.textContent === 'Паттерны хуятерны'){
      setPattern(true)
          }
          else if(e.target.textContent === 'полный хардCORE '){
            setCore(true)
                }
                else if(e.target.textContent === 'Spring хорошее время года'){
                  setSpring(true)
                      }
                      else if(e.target.textContent === 'SQL и где они обитают'){
                        setSql(true)
                            }
  }
  function returnClick(){
    setHyper(false)
    setPotok(false)
    setOpen(true)
    setPattern(false)
    setCore(false)
    setSpring(false)
    setSql(false)
  }
  return (
<div className='App'>
  {!isOpen && <button className='backButton' onClick={returnClick}>темы</button>}
  {isOpen &&  <div className="menu">
      <h1>Темы</h1>
     {themes.map( theme => <button className='theme-button' key={theme} onClick={closeMenu}>{theme}</button>)}
    </div>}
   {isHyper &&  hyperCards.map((card) => <Card question={card.q} answer={card.a} img={card.img} key={card.q}/>)}
   {isPotok &&  potoks.map((card) => <Card question={card.q} answer={card.a} img={card.img} key={card.q}/>)}
   {isPattern &&  patterns.map((card) => <Card question={card.q} answer={card.a} img={card.img} key={card.q}/>)}
   {isCore &&  core.map((card) => <Card question={card.q} answer={card.a} img={card.img} key={card.q}/>)}
   {isSpring &&  spring.map((card) => <Card question={card.q} answer={card.a} img={card.img} key={card.q}/>)}
   {isSql &&  sql.map((card) => <Card question={card.q} answer={card.a} img={card.img} key={card.q}/>)}

    </div>
  );
}

export default App;
