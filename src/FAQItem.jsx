/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import "./App.css";


const FAQItem = ({ faq, index }) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    if (index === 0) {
      setIsShow(true);
    }
  }, [index]);

  const handleClick = () => {
    setIsShow((prevIsShow) => !prevIsShow);
  };

  return (
    <div className='faq-box'>
      <div className="que" onClick={handleClick}>
        
        <div>{faq.question}</div>
        <button>{isShow ? "-" : "+"}</button>
      </div>
      <div className={isShow ? 'ans show' : 'ans'}>{faq.answer}</div>
    </div>
  );
};

export default FAQItem;
