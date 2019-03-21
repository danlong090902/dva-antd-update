/**
 * Created JS
 * User: JiangYilong
 * Date: 2018/7/16
 * Time: 9:53
 * Email: jiangyilong@wafersystems.com
 */
import React from 'react';
import {Layout, Menu, Icon} from 'antd'
import {Link} from 'dva/router'

const {Sider} = Layout
const {SubMenu} = Menu
export default ({toggle, layout, dispatch}) => {
  const collapsed = layout.toggle;
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
    >
      <div className="logo"/>
      <Icon
        className="trigger"
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={() => dispatch({type: 'layout/setState', payload: {toggle: !layout.toggle}})}
        style={{color: '#fff', position: 'relative', left: '40%'}}
      />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="/map">
          <Link to='/Amap'>
            <Icon type="user"/>
            <span>地图</span>
          </Link>
        </Menu.Item><Menu.Item key="/DatePicker">
          <Link to='/DatePicker'>
            <Icon type="user"/>
            <span>日期选择</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/Carousel">
          <Link to='/Carousel'>
            <Icon type="video-camera"/>
            <span>走马灯</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/hook">
          <Link to='/hook'>
            <Icon type="video-camera"/>
            <span>钩子函数</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/BizCharts">
          <Link to='/BizCharts'>
            <Icon type="upload"/>
            <span>图表</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/MyForm">
          <Link to='/MyForm'>
            <Icon type="upload"/>
            <span>表单</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/Time">
          <Link to='/Time'>
            <Icon type="upload"/>
            <span>时间</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="/tree">
          <Link to='/tree'>
            <Icon type="upload"/>
            <span>树形控件</span>
          </Link>
        </Menu.Item>
        <SubMenu key="sub" title={<span><Icon type="laptop"/>二级菜单</span>}>
          <Menu.Item key="/moreMenu/MoreMenu1">
            <Link to='/moreMenu/MoreMenu1'>
              <Icon type="upload"/>
              <span>二级一</span>
            </Link>
          </Menu.Item>
          <SubMenu key='sub1' title={<span><Icon type='laptop'/>三级菜单</span>}>
            <Menu.Item key="/moreMenu/MoreMenu2">
              <Link to='/moreMenu/MoreMenu2'>
                <Icon type="upload"/>
                <span>三级一</span>
              </Link>
            </Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key='sub2' title={<span><Icon type='laptop'/>更多</span>}>
          <Menu.Item key="/More/Rate">
            <Link to='/More/Rate'>
              <Icon type="upload"/>
              <span>评价</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/More/Slider">
            <Link to='/More/Slider'>
              <Icon type="upload"/>
              <span>滑块</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/More/Transfer">
            <Link to='/More/Transfer'>
              <Icon type="upload"/>
              <span>穿梭框</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/More/Upload">
            <Link to='/More/Upload'>
              <Icon type="upload"/>
              <span>上传</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/More/Card">
            <Link to='/More/Card'>
              <Icon type="upload"/>
              <span>卡片</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/More/Collapse">
            <Link to='/More/Collapse'>
              <Icon type="upload"/>
              <span>折叠面板</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/More/Tabs">
            <Link to='/More/Tabs'>
              <Icon type="upload"/>
              <span>标签页</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/More/TimeLine">
            <Link to='/More/TimeLine'>
              <Icon type="upload"/>
              <span>时间线</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/More/Drawer">
            <Link to='/More/Drawer'>
              <Icon type="upload"/>
              <span>抽屉</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/More/Modal">
            <Link to='/More/Modal'>
              <Icon type="upload"/>
              <span>模态框</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/Charts">
            <Link to='/Charts'>
              <Icon type="upload"/>
              <span>图表</span>
            </Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  )
}
