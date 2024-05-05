import React, { useState } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  

  const handleInputChange = (event) => {

    const userInput = event.target.value;
    setUsername(userInput);

    if (userInput.toLowerCase().includes('o')) {
        
        alert('Por favor, ¡Nombres de usuario sin la letra o!');
        

      }

  };

  const handleRegister = () => {

    if (username.trim() === '' || username.toLowerCase().includes('o') ) {
        alert('Usuario inválido para registrarse');
    } else {
      alert('¡Usuario registrado correctamente!');
      setUsername("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={handleInputChange}
        placeholder="Ingrese su nombre de usuario"
      />
      <button onClick={handleRegister}>Registrarse</button>
      <p>{username}</p> 
      
    </div>
  );
};

export default Login;
