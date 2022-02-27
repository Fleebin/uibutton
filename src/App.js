import React from 'react';
import { UIButton } from './components/UI/button'

const App = () => {
  return (
    <>
      <UIButton className="primary">Teste</UIButton>
      <UIButton className="secondary">Teste</UIButton>

      <UIButton disabled={true} className="primary">Teste</UIButton>
      <UIButton disabled={true} className="secondary">Teste</UIButton>
    </>
  );
}

export default App;