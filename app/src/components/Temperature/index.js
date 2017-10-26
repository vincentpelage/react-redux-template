/*
 * Npm import
 */
import React from 'react';


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
  loadedTimeParis
}) => {
  if (!loaded || !loadedTimeSydney || !loadedTimeParis) {
    return null;
  }
  if (mobile) {
    console.log('Mobile : ' + mobile);
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
      <div className="temperature-data">
        <p className="weather time-sydney">{ timeFormatedSydney }</p>
        <p className="weather time-paris">{ timeFormatedParis }</p>
      </div>
    </div>
  );
};

/*
 * Export default
 */
export default Temperature;
