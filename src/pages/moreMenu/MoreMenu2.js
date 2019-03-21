/**
 * Created JS
 * User: JiangYilong
 * Date: 2018/7/18
 * Time: 10:28
 * Email: jiangyilong@wafersystems.com
 */
import React from 'react'
import {connect} from 'dva'
const Index = () => {
  return (
    <div>
      222
    </div>
  )
}
export default connect(state => state)((state) =><Index state={state} />)
