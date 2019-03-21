/**
 * Created JS
 * User: JiangYilong
 * Date: 2018/7/12
 * Time: 15:44
 * Email: jiangyilong@wafersystems.com
 */
import React from 'react';
import {Row,Col} from 'antd';
import ReactHighcharts from 'react-highcharts'
import {connect} from 'dva';

 class Index extends React.Component {
  constructor(props){
    super(props)
    this.state ={

    }
  }
  render() {
    let config = this.props.example.chartConfig;
    console.log(this.props.example)
    return (
      <div>
        <Row>
          <Col span={12}>123</Col>
          <Col span={12}><ReactHighcharts config={config} /></Col>
        </Row>
      </div>
    )
  }
}

export default connect(state =>state)(({example}) => <Index example={example} />)


