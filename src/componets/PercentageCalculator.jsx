import React, { useState } from 'react';
import percentageicon from "../assets/img/percentage.png";

const PercentageOfNumberCalculator = () => {
  const [percentage, setPercentage] = useState('');
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    setResult((percentage / 100) * number);
  }

  return (
    <div className='container'>
      <div className='col'>
      <div className='porciento' id='porciento'>
        <div className='inputs'>
          <img src={percentageicon} alt='icono porcentaje'/>
          <label>Porcentaje:</label>
          <input type="number" value={percentage} onChange={e => setPercentage(e.target.value)} />
          <label>Número:</label>
          <input type="number" value={number} onChange={e => setNumber(e.target.value)} />
          <button onClick={handleCalculate} className="button">Calcular</button>
          {result && <p className='resultado'>Resultado: {result}</p>}
        </div>
      </div>
      </div>
    </div>
  );
}

export default PercentageOfNumberCalculator;