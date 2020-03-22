import React from 'react';

function Curso(props) {
  const { cursos } = props;
  return (
    <div>
      <ul>
        {cursos.map(c => <li key={c}>{c}</li>)}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Curso cursos={['Java', 'React', 'Angular']} />
      </header>
    </div>
  );
}

export default App;
