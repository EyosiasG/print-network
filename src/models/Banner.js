import React, { Component } from 'react';

class Banner extends Component {
  constructor(props) {
    super(props);

    this.state = {
      height: props.height || 0,
      width: props.width || 0,
      type: props.type || '',
      // Add other attributes as needed
    };
  }

  render() {
    const { height, width, type } = this.state;

    return (
      <div>
        <h2>Banner Information</h2>
        <p>Height: {height}</p>
        <p>Width: {width}</p>
        <p>Type: {type}</p>
        {/* Render other attributes as needed */}
      </div>
    );
  }
}

export default Banner;