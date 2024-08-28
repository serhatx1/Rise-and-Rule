import React, { useEffect, useState } from 'react';
import face from "../images/face.webp";
import { useCount } from '../Context/context.jsx';

export const Start = () => {
  const [name, setName] = useState('');
  const [leadership, setLeadership] = useState(1);
  const [intelligence, setIntelligence] = useState(1);
  const [charisma, setCharisma] = useState(1);
  const [luck, setLuck] = useState(1);
  const [tempSpecial,setTempSpecial] = useState(0)

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleIncrement = (attribute, setAttribute,t,st) => {
    
    if (attribute < 10 && getTotal() < special) {
      setAttribute(attribute + 1);
      st(t-1)
      console.log(tempSpecial)
      console.log(special)

    }
  };

  const handleDecrement = (attribute, setAttribute,t,st) => {
    if (attribute > 0) {
      setAttribute(attribute - 1);
      st(t+1)

    }
  };
useEffect(() => {
  console.log(special)
  setTempSpecial(special)
  
}, [])

  const getTotal = () => (leadership + intelligence + charisma + luck)-4;

  const { 
    special, 
    setSpecial: setContextSpecial, 
    setName: setContextName,
    setLuck: setContextLuck,
    setCharisma: setContextCharisma,
    setIntelligence: setContextIntelligence,
    setLeadership: setContextLeadership 
  } = useCount();
  const handleNameUpdate = () => {
    setContextName(name);
    setContextLuck(luck)
    setContextCharisma(charisma)
    setContextIntelligence(intelligence)
    setContextLeadership(leadership)
    setContextSpecial(tempSpecial)



  };

  return (
    <div className='StartSection'>
      <div className="charc">
        <div className="image">
          <img src={face} alt="Character" />
        </div>
        <div className='input'>
          
          
      <div className='attributes'>
      <span>Enter a name:</span>
          <input
          className='attribute'
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
          />
        <div className='attribute'>
          <span>Leadership:</span>
          <button onClick={() => handleDecrement(leadership, setLeadership,tempSpecial,setTempSpecial)}>-</button>
          <span>{leadership}</span>
          <button onClick={() => handleIncrement(leadership, setLeadership,tempSpecial,setTempSpecial)}>+</button>
        </div>
        <div className='attribute'>
          <span>Intelligence:</span>
          <button onClick={() => handleDecrement(intelligence, setIntelligence,tempSpecial,setTempSpecial)}>-</button>
          <span>{intelligence}</span>
          <button onClick={() => handleIncrement(intelligence, setIntelligence,tempSpecial,setTempSpecial)}>+</button>
        </div>
        <div className='attribute'>
          <span>Charisma:</span>
          <button onClick={() => handleDecrement(charisma, setCharisma,tempSpecial,setTempSpecial)}>-</button>
          <span>{charisma}</span>
          <button onClick={() => handleIncrement(charisma, setCharisma,tempSpecial,setTempSpecial)}>+</button>
        </div>
        <div className='attribute'>
          <span>Luck:</span>
          <button onClick={() => handleDecrement(luck, setLuck,tempSpecial,setTempSpecial)}>-</button>
          <span>{luck}</span>
          <button onClick={() => handleIncrement(luck, setLuck,tempSpecial,setTempSpecial)}>+</button>
        </div>
      </div>
      <div className='handleButton'>
      <button onClick={handleNameUpdate}>Set Name</button>

      </div>

        </div>
        
      </div>

    </div>
  );
};
