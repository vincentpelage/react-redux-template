/*
 * Npm import
 */
import React from 'react';


/*
 * Local import
 */
import Header from 'src/containers/Header';
import Temperature from 'src/containers/Temperature';

/*
 * Code
 */
class App extends React.Component {
  /*
   * Lifecycles
   */
  componentWillMount() {
    this.props.actions.loadDatas();
		const size = window.innerWidth;
    this.props.actions.setMobile(size);
    this.props.actions.loadTimeSydney();
  }

  /**
   * Render
   */
  render() {
	  return (
	    <div id="app">
	      <Header />
	      <Temperature />
	    </div>
	  );
	}
}



/*
 * Export default
 */
export default App;
