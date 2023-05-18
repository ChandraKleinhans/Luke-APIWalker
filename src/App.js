import './App.css';
import axios from 'axios';
import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

import Form from './components/Form'
import People from './components/People'
import Planets from './components/Planets'

function App() {

  const navigate = useNavigate();

  const [current, setCurrent] = useState({})
  const [type, setType] = useState('people')
  const [itemId, setItemId] = useState(0)

  //select people/planets
  const selectType = (newType) => {
    setType(newType)
  }

  //select ID for API
  const idSelect = (newId) => {
    setItemId(newId)
  }

  //Get API information from new request
  const newRequest = (e) => {
    e.preventDefault();
    axios.get(`https://swapi.dev/api/${type}/${itemId}/`)
      .then((response) => {
        setCurrent(response.data);
      })
      .catch((error) => {
        navigate('/error');
      })
    type === 'planets'
      ? navigate('/planets/${itemId}')
      : navigate('/people/${itemId}');
  };



  return (
    <div className="App">
      <Form
        selectType={selectType}
        type={type}
        itemId={itemId}
        idSelect={idSelect}
        newRequest={newRequest}
      />
      
      <Routes>
        <Route path="/people/:id" element={<People current={current} />} />
        <Route path="/planets/:id" element={<Planets current={current} />} />
        <Route
          path="/error"
          element={
            <>
              <h1>These aren't the droids you're looking for!</h1>
              <img
                src="https://i.insider.com/627d69ea27d5960019ee5d60?width=1000&format=jpeg&auto=webp"
                alt="These aren't the droids you're looking for"
              />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
