
import React, { useState } from 'react';

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
    setAge(calculateAge(dob));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Fecha de nacimiento:
          <input type="date" value={dob} onChange={e => setDob(e.target.value)} />
        </label>
        <input type="submit" value="Calcular edad" />
      </form>
      {age && <p>Edad actual: {age}</p>}
    </div>
  );
}

export default AgeCalculator;
