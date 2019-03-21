const  initalState = {
  check1:true,
  normal:'',
  long:'',
  date:'',
  chartConfig:{
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    series: [{
      data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
    }]
  },
  treeData: [
    { title: '树木', key: '0' },
    { title: '树木', key: '1' },
    { title: 'Tree Node', key: '2', isLeaf: true },
  ],
};
export default {

  namespace: 'example',

  state: initalState,

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'setState' });
      yield put({type: 'initState'})
    },
  },

  reducers: {
    setState(state, {formData},check1=true) {
      console.log(formData);
      return { ...state, ...formData ,check1};
    },
    initState(state){
      console.log(state);
      console.log(initalState);
      return{...state,...initalState}
    }
  },

};
