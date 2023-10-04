import '../Estilos/CalculadorDePorcentaje.css';
import React, { useState } from 'react';
import iconporcentaje from "../assets/porcentaje.png";

const CalculadorDePorcentaje = () => {
  const [porcentaje, setPorcentaje] = useState('');
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState(null);

  const handleCalculate = () => {
    setResultado((porcentaje / 100) * numero);
  }

  return (
  <div>
      <div className='porcentaje' id='porcentaje'>
          <img src={iconporcentaje} alt='etiqueta porcentaje'/>
          <div className='valores'>
            <div className='inputs'>
              <div className='data'>
                <label>PORCENTAJE %</label>
                <input type="number" value={porcentaje} onChange={e => setPorcentaje(e.target.value)} />
              </div>
              <div className='data'>
                <label>NUMERO #</label>
                <input type="number" value={numero} onChange={e => setNumero(e.target.value)} />
              </div>
              
              <button onClick={handleCalculate} className="button">Calcular</button>
            </div>
            <div className='resultado'>
                {resultado && <p className='resultado'>Resultado: {resultado}</p>}
            </div>
          </div>
      </div>
  </div>
  );
}

export default CalculadorDePorcentaje;