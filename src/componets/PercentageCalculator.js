import React, { useState } from 'react';

const PercentageOfNumberCalculator = () => {
  const [percentage, setPercentage] = useState('');
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    setResult((percentage / 100) * number);
  }

  return (
    <div>
      <label>
        Porcentaje:
        <input type="number" value={percentage} onChange={e => setPercentage(e.target.value)} />
      </label>
      <label>
        Número:
        <input type="number" value={number} onChange={e => setNumber(e.target.value)} />
      </label>
      <button onClick={handleCalculate}>Calcular</button>
      {result && <p>Resultado: {result}</p>}
    </div>
  );
}

export default PercentageOfNumberCalculator;