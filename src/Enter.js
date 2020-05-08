import React from 'react';
import logo from './pod.png';
import './Enter.css';
import './app.css'



class Enter extends React.Component {

  goToApp = event => {
    this.props.history.push(`/app/`)
  }

  render() {
    return (
      <div className="Enter">
        <header className="Enter-header">
          <img src={logo} className="Enter-logo" alt="logo" onClick={this.goToApp} />
        </header>
      </div>
    );
  }
}

export default Enter; 