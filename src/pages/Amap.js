import React from 'react'
import {Map} from 'react-amap'
import Geolocation from 'react-amap-plugin-geolocation';
import {connect} from 'dva'

// const key = '1927ab84465aec448189a31a21bd037a';
const pluginProps = {
  enableHighAccuracy: true,
  timeout: 10000,
  showButton: true
}

class AMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  };

  render() {
    return (
      <div>
        <div style={{width: 800, height: 600}}>
          <Map>
            <Geolocation {...pluginProps} />
          </Map>
        </div>
      </div>
    )
  }
}

export default connect(state => state)(() => <AMap />)
