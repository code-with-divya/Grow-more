// src/App.js
import React from 'react';
import Card from './card';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Simple Card Example</h1>
      <div className="card-container">
        <Card
          title="Beautiful Landscape"
          content="This is a beautiful landscape with mountains and a lake."
          imageUrl="https://via.placeholder.com/300x200"
        />
        <Card
          title="Cityscape"
          content="A stunning view of the city skyline at night."
          imageUrl="https://via.placeholder.com/300x200"
        />
        <Card
          title="Forest Path"
          content="A peaceful path through a dense forest."
        />
      </div>
    </div>
  );
}

export default App;
