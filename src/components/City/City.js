import React, {Component} from 'react'
import './City.scss'

export default class City extends Component{
  render(){
    const {city, country, ranking, overallrating, stability, healthcare, environment, education, infrastructure, img} = this.props.city
    return(
      <section>
        <div className="img-container">
          <img src={img} alt={city}/>
          <div className="city-info">
            <div className="city-ranking">
              {ranking}
            </div>
            <div className="city-points">
              <h1>{city}, {country}</h1>
              <h2>Overall rating: {overallrating}</h2>
              <h4>Stability:{stability}</h4>
              <h4>Healthcare:{healthcare}</h4>
              <h4>Environment:{environment}</h4>
              <h4>Education:{education}</h4>
              <h4>infrastructure:{infrastructure}</h4>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
