/*
 * Npm import
 */
import { connect } from 'react-redux';


/*
 * Local import
 */
import Header from 'src/components/Header';
import { checkTask, createTask } from 'src/store/reducer';


/*
 * Code
 */
// State
const mapStateToProps = null;

// Actions
const mapDispatchToProps = {};


/*
 * Component
 */
const createContainer = connect(mapStateToProps, mapDispatchToProps);
const HeaderContainer = createContainer(Header);


/*
 * Export default
 */
export default HeaderContainer;
