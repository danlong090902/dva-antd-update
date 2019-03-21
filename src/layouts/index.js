import styles from './index.css';
import { Layout } from 'antd';
import LeftMenu from './Menu'
import React from 'react';
import {connect} from 'dva';
import { withRouter } from 'dva/router'


const { Header, Content } = Layout;
class BasicLayout extends React.Component {
  state = {
    collapsed: false,
  };
  render(){
    const { children } = this.props;
    console.log(this.props)
    return (
      <Layout>
        <LeftMenu toggle={this.state.collapsed} layout={this.props.layout} dispatch={this.props.dispatch} />
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>

          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  }

}

class App extends React.Component {
  render() {
    let { children, location,layout,dispatch } = this.props;
    return (
      <BasicLayout location={location} layout={layout} dispatch={dispatch}>
        {children}
      </BasicLayout>
    )
  }
}
export default withRouter(
  connect(({ app, loading,layout,dispatch }) => ({
    app,
    loading,
    layout,
    dispatch
  }))(App)
)

