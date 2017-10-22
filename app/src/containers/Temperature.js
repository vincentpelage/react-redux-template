/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import Temperature from 'src/components/Temperature';
import { checkTask, createTask } from 'src/store/reducer';


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
