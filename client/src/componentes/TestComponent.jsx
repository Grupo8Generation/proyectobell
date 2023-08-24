import React from 'react';
import { useHistory } from 'react-router-dom';

const TestComponent = () => {
  const history = useHistory();

  // Simplemente imprime la historia en la consola para comprobar si funciona
  console.log(history);

  return (
    <div>
      <p>Prueba de useHistory en TestComponent</p>
    </div>
  );
};

export default TestComponent;
