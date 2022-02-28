import React from 'react';
import { UIButton } from './components/UI/button'
import './style.scss'

const App = () => {
  return (
    <>
      <UIButton className="primary">Primario</UIButton>
      <UIButton className="secondary">Secundario</UIButton>

      <UIButton className="primary" icon="arrow-right"> </UIButton>
      <UIButton className="primary" icon="check"></UIButton>
      <UIButton className="primary" icon="refresh"></UIButton>

      <UIButton disabled={true} className="primary">Desabilitado</UIButton>
      <UIButton disabled={true} className="secondary">Desabilitado</UIButton>
    </>
  );
}

export default App;