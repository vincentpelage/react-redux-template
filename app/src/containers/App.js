/*
 * Npm import
 */
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
/*
 * Local import
 */
import App from 'src/components/App';
import { loadDatas, setMobile, loadTimeSydney, loadTimeParis } from 'src/store/reducer';
/*
 * Code
 */
// State
const mapStateToProps = null;

// Actions

const mapDispatchToProps = dispatch => ({
  actions: {
    loadDatas: () => {
      dispatch(loadDatas());
    },
    setMobile: (size) => {
      dispatch(setMobile(size));
    },
    loadTimeSydney: () => {
      dispatch(loadTimeSydney());
    },
    loadTimeParis: () => {
      dispatch(loadTimeParis());
    },
  },
});
// http://api.timezonedb.com/v2/get-time-zone?key=1LYUJ5AOD7V0&format=xml&by=zone&zone=Australia/Sydney
// http://api.timezonedb.com/v2/get-time-zone?key=1LYUJ5AOD7V0&format=xml&by=zone&zone=Europe/Paris

/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const AppContainer = createContainer(App);


/*
 * Export default
 */
export default withRouter(AppContainer);
