import React from 'react';

import './RandomPlanet.css';
import SwapiService from '../../services/SwapiService';
import Loader from '../Loader';

export default class RandomPlanet extends React.Component{

    constructor(){
        super();
        this.updatePlanet();
    }

    swapi = new SwapiService();

    state = {
        planet: {},
        load: true
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            load: false
        });
    }

    updatePlanet(){
        const id = Math.round(Math.random() * 25);
        this.swapi.getPlanet(id).then(this.onPlanetLoaded);    
        // {
        //     this.setState({
        //         id,
        //         name: planet.name,
        //         diameter: planet.diameter,
        //         population: planet.population,
        //         gravity: planet.gravity                
        //     });
        // });
    }    

    render() {

        const { planet: {name, diameter, population, gravity, id}, load} = this.state;

        if(load) {
            return <Loader />;
        }

        return(
                <div className="RandomPlanet">
                    <h3>{name}</h3>
                    <div className="d-flex planet_block">
                        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet"/>
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
