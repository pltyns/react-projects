import React from 'react';
import WebVitalsDisplay from './WebVitalsDisplay';

function App() {
  return (
    <div className="App" style={{ fontFamily: 'sans-serif', padding: '2rem', textAlign: 'center' }}>
      <h1>🚀 React Web Vitals Demo</h1>
      <p>Sayfa performansını canlı olarak izleyin.</p>
      <WebVitalsDisplay />
    </div>
  );
}

export default App;
