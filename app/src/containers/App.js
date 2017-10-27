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

/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const AppContainer = createContainer(App);


/*
 * Export default
 */
export default withRouter(AppContainer);
