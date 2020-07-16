import React, {Component} from 'react'
import City from '../City/City'
import {cityData} from './cityData'
import './CityList.scss'

export default class CityList extends Component {
  render() {
    const cities = cityData
    return(
      <section  className='cityList'>
      {
      cities.map(city=>{
        return (
          <div className='cityListGrid' key={city.id}>
            <City id={city.id} city={city} style={{float:'left'}}/>
          </div>
        );
      })
      }
      </section>
    )
  }
}
