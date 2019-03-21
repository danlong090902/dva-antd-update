/**
 * Created JS
 * User: JiangYilong
 * Date: 2018/7/18
 * Time: 13:56
 * Email: jiangyilong@wafersystems.com
 */
import React from 'react';
import {Rate, Icon} from 'antd';
import {connect} from 'dva';

const Index=  () => {
  return (
    <div>
      <div>桃之夭夭，灼灼其华，之子于归，宜其室家，桃之夭夭，有蕡其实，之子于归，宜其家室，桃之夭夭，其叶蓁蓁，之子于归，宜其家人</div>
      <div>蒹葭苍苍，白露为霜，所谓伊人，在水一方，溯洄从之，道阻且长，溯游从之，宛在水中央，
        <br/>蒹葭萋萋，白露未晞，所谓伊人，在水之湄， 溯洄从之，道阻且跻，溯游从之，宛在水中坻，
        <br/>蒹葭采采，白露未已，所谓伊人，在水之涘，溯洄从之，道阻且右，溯游从之，宛在水中沚
      </div>
      <Rate character={<Icon type="heart"/>} allowHalf/>
    </div>
  )
}

export default connect(state =>state)(({example}) => <Index example={example} />)
