import React, { Component } from 'react';
// import { Link } from 'react-router';
// import { GithubButton } from 'components';
// import config from '../../config';
import Helmet from 'react-helmet';

export default class WebLinter extends Component {
  render() {
    const styles = require('./WebLinter.scss');
    // require the logo image both from client and server
    // const logoImage = require('./logo.png');
    return (
      <div className={styles.webLinter}>
        <Helmet title="WebLinter"/>
        <div className={styles.masthead}>
          <div className="container">
            <p className={styles.humility}>
              Created and maintained by <a href="#" target="_blank">@yanlonglai</a>.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
