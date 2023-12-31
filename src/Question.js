import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return <article className='question'>
    <header>
      <h4>{title}</h4>
      <button className='btn' onClick={() => setShowInfo(!showInfo)} >{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}</button>
    </header>
    {showInfo && <p>{info}</p>}
    {/* true && expression always evaluates to expression, and false && expression always evaluates to false. */}
  </article>;
};

export default Question;
