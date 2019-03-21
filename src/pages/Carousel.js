/**
 * Created JS
 * User: JiangYilong
 * Date: 2018/7/16
 * Time: 10:59
 * Email: jiangyilong@wafersystems.com
 */
import React from 'react';
import {Carousel} from 'antd';
import {connect} from 'dva';

const Index =  () => {
  return (
    <div>
      <Carousel  vertical autoplay>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
      </Carousel >
    </div>
  )
}
export default connect(state =>state)(() => <Index />)
