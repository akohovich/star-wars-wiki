import React from 'react';

import './RandomPlanet.css';
import SwapiService from '../../services/SwapiService';

export default class RandomPlanet extends React.Component{

    constructor(){
        super();
        this.updatePlanet();
    }

    swapi = new SwapiService();

    state = {
        name: null,
        diameter: null,
        population: null,
        gravity: null
    }

    updatePlanet(){
        this.swapi.getPlanet(2).then((planet) => {
            this.setState({
                name: planet.name,
                diameter: planet.diameter,
                population: planet.population,
                gravity: planet.gravity                
            });
        });
    }    

    render() {

        const {name, diameter, population, gravity} = this.state;

        return(
                <div className="RandomPlanet">
                <h3>{name}</h3>
                <div className="d-flex planet_block">
                    <img src="https://cdni.rt.com/russian/images/2017.06/article/594e4840c46188182a8b473a.jpg" alt="planet"/>
                    <ul className="planet_info_block">
                        <li>
                            <span>diameter </span>
                            <span>{diameter}</span>
                        </li>
                        <li>
                            <span>population </span>
                            <span>{population}</span>
                        </li>
                        <li>
                            <span>gravity </span>
                            <span>{gravity}</span>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
