import { legacy_createStore, combineReducers,compose, applyMiddleware  } from "redux"
import reduxThunk from "redux-thunk"
import handleNum from "./NumStatus/reducer"
import handleArr from "./ArrStatus/reducer"


const reducers = combineReducers({
   handleNum,
   handleArr
})


// 创建数据厂库
//  const store  = legacy_createStore(reducers,
//     window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : undefined
//     )


let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
 
const store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)))

 export default store




