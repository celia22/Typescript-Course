import React from 'react';
import './App.css';
import InputField from './components/InputField';


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="heading">
      <span className='heading'>Taskify</span>
      <InputField />
      </header>
    </div>
  );
}

export default App;
