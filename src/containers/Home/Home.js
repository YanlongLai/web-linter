import React, { Component } from 'react';
// import { Link } from 'react-router';
import { GithubButton } from 'components';
import config from '../../config';
import Helmet from 'react-helmet';

export default class Home extends Component {
  render() {
    const styles = require('./Home.scss');
    // require the logo image both from client and server
    const logoImage = require('./logo.png');
    return (
      <div className={styles.home}>
        <Helmet title="Home"/>
        <div className={styles.masthead}>
          <div className="container">
            <div className={styles.logo}>
              <p>
                <img src={logoImage}/>
              </p>
            </div>
            <h1>{config.app.title}</h1>

            <h2>{config.app.description}</h2>

            <p>
              <a className={styles.github} href="https://github.com/yanlonglai/web-linter"
                 target="_blank">
                <i className="fa fa-github"/> View on Github
              </a>
            </p>
            <GithubButton user="yanlonglai"
                          repo="web-linter"
                          type="star"
                          width={160}
                          height={30}
                          count large/>
            <GithubButton user="yanlonglai"
                          repo="web-linter"
                          type="fork"
                          width={160}
                          height={30}
                          count large/>

            <p className={styles.humility}>
              Created and maintained by <a href="https://twitter.com/erikras" target="_blank">@yanlonglai</a>.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
