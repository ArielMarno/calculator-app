import React, { useState } from 'react';

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState('');

  const handleInput = (e) => {
    setInput(e.target.value);
  }

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (e) {
      setResult('Error');
    }
  }

  return (
    <div>
      <input type="text" value={input} onChange={handleInput} />
      <button onClick={handleCalculate}>Calcular</button>
      <p>Resultado: {result}</p>
    </div>
  );
}

export default Calculator;