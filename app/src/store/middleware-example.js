/*
 * Npm import
 */
import axios from 'axios';


/*
 * Local import
 */
import { WEATHER_LOAD, getWeather, TIME_LOAD_SYDNEY, getTimeSydney } from 'src/store/reducer';


/*
 * Code
 */
const createMiddleware = store => next => (action) => {
  // Je vérifie ce qui m'intéresse
  switch (action.type) {
    case WEATHER_LOAD: {
      axios.get('http://api.openweathermap.org/data/2.5/group?id=2988507,2147714&units=metric&APPID=3690c08b9243ba14aa00a12785524dd3').then((response) => {
        store.dispatch(getWeather(response.data));
      });
      break;
    }

    case TIME_LOAD_SYDNEY: {
			axios.post('http://localhost:3000',{
				value:
				'http://api.timezonedb.com/v2/get-time-zone?key=1LYUJ5AOD7V0&format=json&by=zone&zone=Australia/Sydney'})
			.then((response) => {
        store.dispatch(getTimeSydney(response.data));
      });
      break;
    }

    default:
      // console.log(action);
  }

  // Go to the next
  next(action);
};


/*
 * Export default
 */
export default createMiddleware;
