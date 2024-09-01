import { useState, useEffect } from 'react'
import Rut from './Rut'
import './App.css'


function App() {
  const [data, setData] = useState([])
  const [rut, setRut] = useState(0)

  useEffect(() => {
    if(rut !=0){
      const url = 'https://api.boostr.cl/rut/generate.json';
      const options = {method: 'GET', headers: {accept: 'application/json'}};
      
      fetch(url, options)
        .then(res => res.json())
        .then(json => {setData(json.data)})
        .catch(err => console.error('error:' + err));
    }

  }, [rut])

  const haceClick = () => {
    setRut(Math.random());
    window.localStorage.removeItem('data')
  }

  return (
    <main>
      <section>
        <p>Generador de RUT</p>
        <button onClick={haceClick}>Cargar nuevo rut</button>
        <Rut data={data}></Rut>
      </section>

      <footer>
        <p>Creado por Felipe Castro</p>
      </footer>
    </main>
  )
}

export default App
