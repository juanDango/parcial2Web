import React, { useEffect, useState } from 'react';
import Tabla from './components/table';
import Detail from './components/detail'
import Grafico from './components/grafico'

function App(props) {

  const [series, setSeries] = useState([])

  const [selected, setSelected] = useState({})

  useEffect(()=>{
    if(!navigator.onLine){
      if (localStorage.getItem("series") === null) setSeries("Loading...");
      else setSeries(JSON.parse(localStorage.getItem("series")));
    }

    fetch(props.url)
    .then(res => res.json())
    .then(res => {
      setSeries(res)
      localStorage.setItem('series', JSON.stringify(res))
    })
  },[])

  const handleSelection = (event)=>{
    const id = parseInt(event.target.id.split('-')[1])
    const sel = series.find(item => item.id === id)

    setSelected(sel)
  }

  return (
    <div className="App">
      <div className="App row">
        <div className ='col-7'>
          <Tabla series ={series} handleSelection={handleSelection}/>
        </div>
        <div className ='col-4'>
          <Detail selected = {selected}></Detail>
        </div>
      </div>
      <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <Grafico series={series}/>
          </div>
        </div>
    </div>
  );
}

export default App;
