import React, {useState, useEffect} from 'react';
import Header from './Components/Header/index'
import Form from './Components/Form/index'
import Weather from './Components/Weather/index'
import Error from './Components/Error/index'

function App() {


const [search, saveSearch] = useState({
  city: '',
  country: ''
})

  const [call, saveCall] = useState(false)

  const [result, saveResult] = useState({})

  const [error, saveError] = useState(false)
  
  const { city, country } = search
  
  useEffect(() => {
    const callApi = async () => {

      if (call) {

        const appID = '0758ac202eecd8c67a8df893bcedbbd5'
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appID}`

        const response = await fetch(url)
        const result = await response.json()

        saveResult(result)
        saveCall(false)

        //Get error

        if (result.cod === '404') {
          saveError(true)
        } else {
          saveError(false)
        }
      }

            
    }
    callApi()

    // eslint-disable-next-line

  }, [call])

  let component;

  if (error) {
    component = <Error messaje='No hay resultados'/>
  } else {
    component = <Weather
                result={result}
             />
  }

  return (
    <>
      <Header
        title='Clima React App'
      />
      <div className='contenedor-form'>
        <div className='container'>
          <div className='row'>
            <div className='col m6 s12'>
              <Form
                search={search}
                saveSearch={saveSearch}
                saveCall={saveCall}
              />
            </div>
               <div className='col m6 s12'>
                {component }
            </div>
          </div>
        </div> 
      </div>
      </>


  );
}

export default App;
