import React, { useState } from 'react';
import calendar from "../assets/img/calendar.png";

const AgeCalculator = () => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dob === '') {
      setAge('Si no selecciona una fecha no sera posible realizar el calculo.');
    } else {
      setAge(calculateAge(dob));
    }
  }

  return (
    <div className='container'>
      <div className='row'>
      <div className='age' id='agecalculator'>
        <form onSubmit={handleSubmit}>
          <img src={calendar} className='calendar' alt='calendario'/>
          <label>Fecha de nacimiento: </label>
          <input type="date" value={dob} onChange={e => setDob(e.target.value)} />
          <button type="submit" className="button">Calcular edad</button>
        </form>
        {age && <p className='resultado'>{isNaN(age) ? age : `Edad actual: ${age}`}</p>}
      </div>
      </div>
    </div>
  );
}

export default AgeCalculator;
