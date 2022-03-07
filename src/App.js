import React from 'react';
import { UIButton } from './components/UI/button'
import './style.scss'

const App = () => {

  return (
    <>
      <h1>primary</h1>
      <UIButton className="primary">Text</UIButton>

      <h1>secondary</h1>
      <UIButton className="secondary">Text</UIButton>

      <p>icon</p>
      <div className='icons'>
        <UIButton className="primary">Text</UIButton>
        <UIButton className="primary icon" icon="arrow-right">Text </UIButton>
        <UIButton className="primary icon" icon="check">Text</UIButton>
        <UIButton className="primary icon" icon="refresh">Text</UIButton>
      </div>

      <p>disabled</p>
      <UIButton disabled={true} className="primary">Text</UIButton>
    </>
  );
}

export default App;