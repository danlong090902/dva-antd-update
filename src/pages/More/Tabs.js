/**
 * Created JS
 * User: JiangYilong
 * Date: 2018/7/18
 * Time: 15:01
 * Email: jiangyilong@wafersystems.com
 */
import React from 'react'
import { Tabs, Select } from 'antd';
import {connect} from 'dva';

const TabPane = Tabs.TabPane;
const Option = Select.Option;


class Index extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     tabPosition: 'top',
   };
   this.changeTabPosition =this.changeTabPosition.bind(this)
 }

  changeTabPosition = (tabPosition) => {
    this.setState({ tabPosition });
  };

  render() {
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          Tab position：
          <Select
            value={this.state.tabPosition}
            onChange={this.changeTabPosition}
            dropdownMatchSelectWidth={false}
          >
            <Option value="top">top</Option>
            <Option value="bottom">bottom</Option>
            <Option value="left">left</Option>
            <Option value="right">right</Option>
          </Select>
        </div>
        <Tabs tabPosition={this.state.tabPosition}>
          <TabPane tab="Tab 1" key="1">Content of Tab 1</TabPane>
          <TabPane tab="Tab 2" key="2">Content of Tab 2</TabPane>
          <TabPane tab="Tab 3" key="3">Content of Tab 3</TabPane>
        </Tabs>
      </div>
    );
  }
}

export default connect(state =>state)(({example}) => <Index example={example} />)
