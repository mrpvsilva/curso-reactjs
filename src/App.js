import React from 'react';

function Curso(props) {
  const { cursos } = props;
  return (
    <div className="card">
      <ul className="list-group list-group-flush">
        {cursos.map(c => <li className="list-group-item" key={c}>{c}</li>)}
      </ul>
    </div>
  );
}

function App() {
  return (
    <div className="row justify-content-md-center">
      <div className="col-xl-7 col-lg-8 col-md-9 col-sm-12 col-xs-12">
        <Curso cursos={['Java', 'React', 'Angular']} />
      </div>
    </div>
  );
}

export default App;
