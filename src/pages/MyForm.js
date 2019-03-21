import React from 'react'
import {Form, Input, Checkbox, Button, DatePicker} from 'antd'
import moment from 'moment'
import {connect} from 'dva';

const FormItem = Form.Item;

class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:''
    }
  }

  submit = () => {
    this.props.form.validateFields((error, value) => {
      console.log(this.props.example);
      this.props.dispatch({
        type: 'example/setState',
        formData: value
      })
      this.props.dispatch({
        type: 'example/initState'
      })
    });
  };

  componentDidMount() {
    // 禁止右键
    // document.oncontextmenu = new Function("event.returnValue=false;");
    // document.onselectstart = new Function("event.returnValue=false;");
  }

  render() {
    const { getFieldDecorator} = this.props.form;
    const {dispatch, example} = this.props;
    // let errors;
    return (
      <div>
        <div>鸳鸯双栖蝶双飞，满园春色惹人醉</div>
        <FormItem>
          {getFieldDecorator('date', {
            rules: [
              {required: true}
            ],
            initialValue:moment()
          })(<DatePicker  showTime={{format: 'mm:ss', hideDisabledOptions: true}}>

          </DatePicker>)}
        </FormItem>
        <FormItem label="Note"
                  labelCol={{span: 5}}
                  wrapperCol={{span: 12}} hasFeedback>
          {getFieldDecorator('normal', {
            rules: [
              {required: true}
            ],
            initialValue: example.normal,
          })(<Input />)}

        </FormItem>
        <FormItem label="用户名"
                  labelCol={{span: 5}}
                  wrapperCol={{span: 12}} hasFeedback>
          {getFieldDecorator('long', {
            rules: [
              {required: true}
            ],
            initialValue: example.long,
          })(<Input/>)}

        </FormItem>

        {/*<Input {...getFieldProps('long',{*/}
        {/*rules:[*/}
        {/*{required:true}*/}
        {/*],*/}
        {/*initialValue:this.props.example.long*/}
        {/*})} />*/}
        <FormItem label="选不选"
                  labelCol={{span: 5}}
                  wrapperCol={{span: 12}}>
          {getFieldDecorator('check1', {
            rules: [
              {required: true}
            ],
            // submit validateFields 提交的时候默认值 此处不是Checkbox的默认值
            initialValue: example.check1,
          })(<Checkbox defaultChecked={example.check1}>选不选我呢 </Checkbox>)}
        </FormItem>
        <button onClick={this.submit}>submit</button>
        <Button type="primary" onClick={() => {
          dispatch({
            type: 'example/fetch'
          })
        }}>检测</Button>
        {/*{validateFields((errors,values) => {*/}
        {/*})}*/}
        <Button type="danger" onClick={() => {
          dispatch({
            type: 'example/initState'
          })
        }}>
          恢复初始值
        </Button>
      </div>
    );
  }
}

const FormC = Form.create()(MyForm);
export default connect(state =>state)(({example}) => <FormC example={example} />)
