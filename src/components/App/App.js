import React from 'react';
import SwapiService from '../../services/SwapiService';

const App = () => {

    const swapi = new SwapiService();
  
    swapi.getAllPeople()
      .then((body) => {
          console.log(body);
      });

    return (
        <div>
            Header
        </div>
    )
}

export default App;