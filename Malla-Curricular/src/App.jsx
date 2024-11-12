import React, { useState } from 'react';
import './App.css';
import subjectsData from './subjects.json';

const App = () => {
  const [asignaturasDestacadas, setAsignaturasDestacadas] = useState({
    anteriores: [],
    actual: null,
    siguientes: []
  });

  const manejarClickAsignatura = (asignatura) => {
    const anteriores = subjectsData.subjects.filter((s) =>
      asignatura.prev.includes(s.name)
    );
    const siguientes = subjectsData.subjects.filter((s) =>
      asignatura.next.includes(s.name)
    );

    setAsignaturasDestacadas({
      anteriores: anteriores.map((s) => s.name),
      actual: asignatura.name,
      siguientes: siguientes.map((s) => s.name)
    });
  };

  const renderizarAsignatura = (asignatura) => {
    let clase = 'asignatura';

    if (asignaturasDestacadas.anteriores.includes(asignatura.name)) {
      clase += ' anterior';
    } else if (asignaturasDestacadas.actual === asignatura.name) {
      clase += ' actual';
    } else if (asignaturasDestacadas.siguientes.includes(asignatura.name)) {
      clase += ' siguiente';
    }

    return (
      <td
        key={asignatura.name}
        className={clase}
        onClick={() => manejarClickAsignatura(asignatura)}
      >
        {asignatura.name}
      </td>
    );
  };

  const renderizarSemestre = (indiceSemestre) => (
    <tr key={indiceSemestre}>
      <td className="etiqueta-semestre">Semestre {indiceSemestre + 1}</td>
      {subjectsData.subjects
        .filter((asignatura) => asignatura.semester === indiceSemestre + 1)
        .map((asignatura) => renderizarAsignatura(asignatura))}
    </tr>
  );

  return (
    <div className="App">
      <h1>Malla Curricular ICINF 2020</h1>
      <table className="tabla-curricular">
        <tbody>
          {Array.from({ length: 11 }, (_, indiceSemestre) => renderizarSemestre(indiceSemestre))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
