import '../Estilos/CalculadorDeEdad.css';
import React, { useState } from 'react';
import calendario from "../assets/calendario.png";

const CalculadorDeEdad = () => {
  const [nacimiento, setNacimiento] = useState('');
  const [edad, setEdad] = useState(null);

  const calcularEdad = (nacimiento) => {
    const fechaActual = new Date();
    const diaQueNacio = new Date(nacimiento);
    let edad = fechaActual.getFullYear() - diaQueNacio.getFullYear();
    const mes = fechaActual.getMonth() - diaQueNacio.getMonth();
    if (mes < 0 || (mes === 0 && fechaActual.getDate() < diaQueNacio.getDate())) {
      edad--;
    }
    return edad;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nacimiento === '') {
      setEdad('Seleccionar fecha.');
    } else {
      setEdad(calcularEdad(nacimiento));
    }
  }

  return (
    <div>
      <div className='edad' id='edad'>
        <img src={calendario} alt='calendario'/>
        <div className='formulario'>
        <form onSubmit={handleSubmit}>
          <label>FECHA DE NACIMIENTO</label>
          <input type="date" value={nacimiento} onChange={e => setNacimiento(e.target.value)} required/>
          <button type="submit">Calcular edad</button>
        </form>
        <div className='resultado'>
         {edad && <p>{isNaN(edad) ? edad : `Edad actual: ${edad}`}</p>}
        </div>
       </div>
      </div>
    </div>
  );
}

export default CalculadorDeEdad;
