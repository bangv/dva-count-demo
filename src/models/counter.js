/**
 * Created by guangqiang on 2017/12/16.
 */

export default {
  namespace: 'counts',
  state: {count:12, test:10},
  reducers: {
    add(state,action) {
      const newV =(+state.count) + (+action.value)
      //state.count=(+state.count) + (+action.value); 切记这里不能这么写 只能顶一个变量俩赋值
      state['count']=(+state.count) + (+action.value);
      console.log(state)
      return {...state}
    },
    minus(state,action) {
      const newMinV=(+state.count) - (+action.value)
      console.log(state)
      // state.count=(+state.count) - (+action.value); 切记这里不能这么写 只能顶一个变量俩赋值
      state['count']=(+state.count) - (+action.value);
      return {...state}
    }
  },
  effects: {
    // 获取详情
    *getDetail({ payload }, { call, put }) {
        yield put({
            type: 'add',
            value: 777,
        });
    }
  }
}
