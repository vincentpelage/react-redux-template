/*
 * Npm import
 */
import React from 'react';
import { Route } from 'react-router-dom';
/*
 * Local import
 */
import Header from 'src/containers/Header';
import Temperature from 'src/containers/Temperature';
import Paris from 'src/components/Paris';
import Sydney from 'src/components/Sydney';
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
    this.props.actions.loadTimeParis();
  }

  /**
   * Render
   */
  render() {
    return (
      <div id="app">
        <Header />
        <Route exact path="/" component={Temperature} />
        <Route exact path="/paris" component={Paris} />
        <Route exact path="/sydney" component={Sydney} />
      </div>
    );
  }
}

/*
 * Export default
 */
export default App;
