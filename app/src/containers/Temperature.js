/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import Temperature from 'src/components/Temperature';


/*
 * Code
 */
// State
const mapStateToProps = state => ({
  weather: state.weather,
  loaded: state.loaded,
  mobile: state.mobile,
  timeSydney: state.timeSydney,
  loadedTimeSydney: state.loadedTimeSydney,
  timeParis: state.timeParis,
  loadedTimeParis: state.loadedTimeParis,
});

// Actions
const mapDispatchToProps = {};


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const TemperatureContainer = createContainer(Temperature);


/*
 * Export default
 */
export default TemperatureContainer;
