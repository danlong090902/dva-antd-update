/**
 * Created JS
 * User: JiangYilong
 * Date: 2018/7/18
 * Time: 14:42
 * Email: jiangyilong@wafersystems.com
 */
import React from 'react';
import { Card, Icon, Avatar } from 'antd';
import {connect} from 'dva';

const { Meta } = Card;

const CardC =  () => {
  return (
    <div>
      <Card style={{width: 300}}
            cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}
            actions={[<Icon type='setting'/>, <Icon type='edit'/>, <Icon type='ellipsis'/>]}
      >
        <Meta
          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
          title="Card title"
          description="This is the description"
        />
      </Card>
    </div>
  )
}
export default connect(state =>state)(({example}) => <CardC example={example} />)
