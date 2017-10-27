/*
 * Npm import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/*
 * Local import
 */

/*
 * Code
 */
const Temperature = ({
  weather,
  loaded,
  mobile,
  timeSydney,
  loadedTimeSydney,
  timeParis,
  loadedTimeParis,
}) => {
  if (!loaded || !loadedTimeSydney || !loadedTimeParis) {
    return null;
  }
  if (mobile) {
    console.log(`mobile : ${mobile}`);
  }

  let timeFormatedSydney = timeSydney.formatted;
  timeFormatedSydney = timeFormatedSydney.slice(11, timeFormatedSydney.length - 3);
  let timeFormatedParis = timeParis.formatted;
  timeFormatedParis = timeFormatedParis.slice(11, timeFormatedParis.length - 3);
  const obj = weather.list;
  return (
    <div id="temp">
      {
      obj.map(city => (
        <div key={city.name} className="temperature">
          <div className="temperature-data">
            <p className="city">{ city.name }</p>
            <p>{ city.main.temp }°</p>
            <p className="weather">{ city.weather[0].description }</p>
          </div>
        </div>
      ))
      }
      <p className="weather time-paris">{ timeFormatedParis }</p>
      <Link to="/paris" className="weather info-paris">Weather infos</Link>
      <p className="weather time-sydney">{ timeFormatedSydney }</p>
      <Link to="/sydney" className="weather info-sydney">Weather infos</Link>
    </div>
  );
};
Temperature.propTypes = {
  weather: PropTypes.object.isRequired,
  loaded: PropTypes.bool.isRequired,
  mobile: PropTypes.bool.isRequired,
  timeSydney: PropTypes.object.isRequired,
  loadedTimeSydney: PropTypes.bool.isRequired,
  timeParis: PropTypes.object.isRequired,
  loadedTimeParis: PropTypes.bool.isRequired,
};

/*
 * Export default
 */
export default Temperature;
