/**
 * Created JS
 * User: JiangYilong
 * Date: 2018/8/6
 * Time: 14:23
 * Email: jiangyilong@wafersystems.com
 */
import React from 'react';
import {connect} from 'dva'
import {DatePicker} from 'antd';
import moment from 'moment'

const {MonthPicker, RangePicker} = DatePicker;

function range(start, end) {
  console.log(end)
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate(current) {
  // Can not select days before today and today  and  days after today 14 days
   return (current && current < moment().endOf('day')) || (current && current > moment().add(14,'d').endOf('day'));
}

function disabledDateTime() {
  return {
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
  };
}

function disabledRangeTime(_, type) {
  if (type === 'start') {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56],
  };
}

class Index extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <DatePicker
          format="YYYY-MM-DD HH:mm:ss"
          disabledDate={disabledDate}
          disabledTime={disabledDateTime}
          showTime={{defaultValue: moment('00:00:00', 'HH:mm:ss')}}
        />
        <br/>
        <MonthPicker disabledDate={disabledDate} placeholder="Select month"/>
        <br/>
        <RangePicker
          disabledDate={disabledDate}
          disabledTime={disabledRangeTime}
          showTime={{
            hideDisabledOptions: true,
            defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
          }}
          format="YYYY-MM-DD HH:mm:ss"
        />
      </div>
    )
  }
}

export default connect(state => state)((state) => <Index state={state}/>)
