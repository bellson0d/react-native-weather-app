/**
 * Created by bellson on 17-3-21.
 */

const delay = timeout => new Promise(resolve => setTimeout(resolve,timeout))

export default {
  namespace: 'counter',

  state: 0,

  effects: {
    *start(action,effects){
      const {put,call,fork,select,takeEvery} = effects

      let interval = yield select(state => state.counter)

      function *demo(){
        while(1){
          yield call(delay,500)
          yield put({type:'setInterval',payload:++interval})
        }
      }

      const d = yield fork(demo)

      yield takeEvery('counter/pause',function *(){
        yield d.cancel()
      })

    },
  },

  reducers: {
    setInterval(state,{payload}){
      return payload
    },
    reset(state){

      return state=0;
    }
  }
}