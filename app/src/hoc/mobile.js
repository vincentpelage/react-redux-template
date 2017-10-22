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
const withMobile = (Component, width) => (
  class Mobile extends React.Component {
    componentWillMount() {
      this.setMobile();
      window.addEventListener('resize', this.setMobile);
    }

    setMobile = () => {
      const mobile = window.innerWidth < width;
      this.setState({ mobile });
    }

    render() {
      const { mobile } = this.state;
      return <Component mobile={mobile} />;
    }
  }
);


/*
 * Export default
 */
export default withMobile;
