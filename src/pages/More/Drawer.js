/**
 * Created JS
 * User: JiangYilong
 * Date: 2018/7/18
 * Time: 15:17
 * Email: jiangyilong@wafersystems.com
 */
import React from 'react';
// import {Drawer, Button} from 'antd';
import {connect} from 'dva';

class LongDrawer extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     visible: false,
  //     childrenDrawer: false
  //   };
  //   this.showDrawer =this.showDrawer.bind(this);
  //   this.showChildrenDrawer =this.showChildrenDrawer.bind(this)
  //   this.onChildrenDrawerClose =this.onChildrenDrawerClose.bind(this)
  //   this.onClose =this.onClose.bind(this)
  // }
  //
  // showDrawer = () => {
  //   this.setState({
  //     visible: true,
  //   });
  // };
  //
  // onClose = () => {
  //   this.setState({
  //     visible: false,
  //   });
  // };
  //
  // showChildrenDrawer = () => {
  //   this.setState({
  //     childrenDrawer: true,
  //   });
  // };
  //
  // onChildrenDrawerClose = () => {
  //   this.setState({
  //     childrenDrawer: false,
  //   });
  // };

  render() {
    return (
      <div>
        {/*<Button type="primary" onClick={this.showDrawer}>*/}
          {/*Open drawer*/}
        {/*</Button>*/}
        {/*<Drawer*/}
          {/*title="Multi-level drawer"*/}
          {/*width={520}*/}
          {/*closable={false}*/}
          {/*onClose={this.onClose}*/}
          {/*visible={this.state.visible}*/}
          {/*push={this.state.childrenDrawer}*/}
        {/*>*/}
          {/*<Button type="primary" onClick={this.showChildrenDrawer}>*/}
            {/*Two-level drawer*/}
          {/*</Button>*/}
          {/*<Drawer*/}
            {/*title="Food"*/}
            {/*width={320}*/}
            {/*closable={false}*/}
            {/*onClose={this.onChildrenDrawerClose}*/}
            {/*visible={this.state.childrenDrawer}*/}
          {/*>*/}
            {/*This is two-level drawer*/}
          {/*</Drawer>*/}
          {/*<div*/}
            {/*style={{*/}
              {/*position: 'absolute',*/}
              {/*bottom: 0,*/}
              {/*width: '100%',*/}
              {/*borderTop: '1px solid #e8e8e8',*/}
              {/*padding: '10px 16px',*/}
              {/*textAlign: 'right',*/}
              {/*left: 0,*/}
              {/*background: '#fff',*/}
              {/*borderRadius: '0 0 4px 4px',*/}
            {/*}}*/}
          {/*>*/}
            {/*<Button*/}
              {/*style={{*/}
                {/*marginRight: 8,*/}
              {/*}}*/}
              {/*onClick={this.onClose}*/}
            {/*>*/}
              {/*Cancel*/}
            {/*</Button>*/}
            {/*<Button onClick={this.onClose} type="primary">*/}
              {/*Submit*/}
            {/*</Button>*/}
          {/*</div>*/}
        {/*</Drawer>*/}
      </div>
    );
  }
}
export default connect(state =>state)(({example}) => <LongDrawer example={example} />)
