import React from 'react';

import './App.css';

import Header from '../Header';
import RandomPlanet from '../RandomPlanet';
import ItemList from '../ItemsList';
import DetailsInfo from '../DetailsInfo';

const App = () => {

    return (
        <div className="App">
            <Header />
            <RandomPlanet />
            <div className="d-flex justify-content-between">
                <ItemList />
                <DetailsInfo />
            </div>
        </div>
    )
}

export default App;