/**
 * Created JS
 * User: JiangYilong
 * Date: 2018/7/18
 * Time: 14:33
 * Email: jiangyilong@wafersystems.com
 */
import React from 'react';
import { Upload, Button, Icon } from 'antd';
import {connect} from 'dva';

const fileList = [{
  uid: -1,
  name: 'xxx.png',
  status: 'done',
  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}, {
  uid: -2,
  name: 'yyy.png',
  status: 'done',
  url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
}];

const props = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  defaultFileList: [...fileList],
};

const props2 = {
  action: '//jsonplaceholder.typicode.com/posts/',
  listType: 'picture',
  defaultFileList: [...fileList],
  className: 'upload-list-inline',
};
const Index = () => {
    return (
      <div>
        <Upload {...props}>
          <Button>
            <Icon type="upload" /> upload
          </Button>
        </Upload>
        <br />
        <br />
        <Upload {...props2}>
          <Button>
            <Icon type="upload" /> upload
          </Button>
        </Upload>
      </div>
    )
}

export default connect(state =>state)(({example}) => <Index example={example} />)
