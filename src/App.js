import React from 'react';
import './App.css';
import Timer from './components/Timer';
import VoiceInput from './components/VoiceInputs';
import RecipeManager from './components/RecipeManager';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>🍳 Voice Controlled Cooking Assistant</h1>
        <Timer />
        <VoiceInput />
        <RecipeManager />
      </header>
    </div>
  );
}

export default App;
