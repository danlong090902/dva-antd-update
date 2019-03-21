
export default {
  namespace: 'layout',
  state: {
    menuMode: 'inline',
    pathname: '/main/example',
    loading: true,
    active:'1',
    toggle:false,
  },
  reducers: {
    setState(state, {payload}) {
      return Object.assign({}, state, {...payload});
    }
  },
  effects: {},
  subscriptions: {
    set({dispatch, history}) {
      return history.listen(({pathname}) => {
        dispatch({type: 'setState', payload: {pathname}});
      })
    },
    // 根据地址导航状态激活
    setup({dispatch, history}) {
      history.listen(location => {
        if (location.pathname.includes('information')) {
          dispatch({
            type: 'setState',
            payload:{active:'1'}
          })
        } else if (location.pathname.includes('general')) {
          dispatch({
            type: 'setState',
            payload:{active:'2'}
          })
        } else if (location.pathname.includes('configure')) {
          dispatch({
            type: 'setState',
            payload:{active:'4'}
          })
        } else if (location.pathname.includes('details')) {
          dispatch({
            type: 'setState',
            payload:{active:'3'}
          })
        }
      });

    }
  }
};
