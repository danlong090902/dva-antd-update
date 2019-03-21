/**
 * Created JS
 * User: JiangYilong
 * Date: 2018/7/18
 * Time: 15:11
 * Email: jiangyilong@wafersystems.com
 */
import React from 'react'
import {Timeline,Icon} from 'antd'
import {connect} from 'dva';

const Index =  () => {
  return (
    <div>
      <Timeline>
        <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
        <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
        <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">Technical testing 2015-09-01</Timeline.Item>
        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
      </Timeline>
    </div>
  )
}
export default connect(state =>state)(({example}) => <Index example={example} />)
