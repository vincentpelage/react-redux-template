/*
 * Types
 */
export const WEATHER_LOAD = 'WEATHER_LOAD';
export const TIME_LOAD_SYDNEY = 'TIME_LOAD';
export const WEATHER_LOADED = 'WEATHER_LOADED';
export const TIME_LOADED_SYDNEY = 'TIME_LOADED_SYDNEY';
export const SET_MOBILE = 'SET_MOBILE';

/*
 * Initial state
 */
const initialState = {
	weather: {},
	timeSydney: {},
  loaded: false,
  loadedTimeSydney: false,
	mobile: false,
};


/*
 * Reducer
 */
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case WEATHER_LOADED:
      return {
        ...state,
        weather: action.weather,
        loaded: true,
      };

    case TIME_LOADED_SYDNEY:
      return {
        ...state,
        timeSydney: action.timeSydney,
        loadedTimeSydney: true,
      };

    case SET_MOBILE:
		if(action.size < 600){
      return {
        ...state,
        mobile: true,
      };
		}


    default:
      return state;
  }
};


/*
 * Action creators
 */
export const loadDatas = () => ({
  type: WEATHER_LOAD,
});

export const loadTimeSydney = () => ({
  type: TIME_LOAD_SYDNEY,
});

export const setMobile = (size) => ({
  type: SET_MOBILE,
	size,
});

export const getWeather = (weather) => ({
  type: WEATHER_LOADED,
  weather,
});

export const getTimeSydney = (timeSydney) => ({
  type: TIME_LOADED_SYDNEY,
  timeSydney,
});
