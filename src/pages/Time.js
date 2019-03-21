import React from 'react';
import moment from 'moment';
import {Button,TimePicker} from 'antd'
import {connect} from 'dva';


class Time extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      time:'',
      time2:'123',
      array:[1,2,3,4],
      obj:{1:1,2:2}
    };
    this.memada.bind(this)
  }
  memada = () => {
    setInterval(() =>
    this.setState({
      time2:moment().format("dddd, MMMM Do YYYY, HH:mm:ss:SSS a")
    })
    )
  };
  render() {
    return (
      <div>
        {/*{this.state.array.map(e => {*/}
          {/*<div>{e}</div>*/}
        {/*})}*/}
        {/*{this.state.obj.forEach((key,value) =>{*/}
          {/*<div>*/}
            {/*<span>{key}</span>*/}
            {/*<span>{value}</span>*/}
          {/*</div>*/}
        {/*})}*/}
        <Button type="primary">123</Button>
        <TimePicker  defaultOpenValue={moment('00:00:00', 'HH:mm:ss')}>

        </TimePicker>
        <div>{this.props.example.formData1}</div>
        <div style={{display:'none'}}>
          {setInterval(()=>{
            this.setState({
              time:moment().format("dddd, MMMM Do YYYY, HH:mm:ss:SSS a")
            })
          })}

        </div>
        <div>
          {this.state.time}
          <br/>
          {this.memada()}
          {this.state.time2}
        </div>
      </div>
    )
  }
}
export default connect(state =>state)(({example}) => <Time example={example} />)
