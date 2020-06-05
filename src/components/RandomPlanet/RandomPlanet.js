import React from 'react';

import './RandomPlanet.css';
import SwapiService from '../../services/SwapiService';
import Loader from '../Loader';
import ErrorComponent from '../ErrorComponent';

export default class RandomPlanet extends React.Component{

    constructor(){
        super();
        console.log('constructor');
    }

    swapi = new SwapiService();

    state = {
        planet: {},
        load: true,
        error: false,
    }

    componentDidMount() {
        console.log('did mount');
        this.updatePlanet();
        setInterval(this.updatePlanet, 2000);
    }

    // componentWillUnmount() {
    //     console.log('will unmount');
    // }

    onError = () => {
        this.setState({
            error: true,
            load: false,
        });
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            load: false
        });
    }

    updatePlanet = () => {
        const id = Math.round(Math.random() * 25);
        this.swapi.getPlanet(id)
        .then(this.onPlanetLoaded)
        .catch(this.onError);    
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

        const { planet, load, error} = this.state;

        const errorContent = error ? <ErrorComponent /> : null;
        const loader = load ? <Loader /> : null;
        const content = (!load && !error)
             ? <PlanetView planet={planet} /> : null;

        return (
            <div className="RandomPlanet">
                {errorContent}
                {loader}
                {content}
            </div>
        );

        // return(
        //         <div className="RandomPlanet">
        //             <h3>{name}</h3>
        //             <div className="d-flex planet_block">
        //                 <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="planet"/>
        //                 <ul className="planet_info_block">
        //                     <li>
        //                         <span>diameter </span>
        //                         <span>{diameter}</span>
        //                     </li>
        //                     <li>
        //                         <span>population </span>
        //                         <span>{population}</span>
        //                     </li>
        //                     <li>
        //                         <span>gravity </span>
        //                         <span>{gravity}</span>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        // );
    }
}

const PlanetView = (props) => {
    const {id, name, diameter, population, gravity} = props.planet;
    return(
        //  <React.Fragment>
        <>
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
         {/* </React.Fragment> */}
        </>
    );
}
