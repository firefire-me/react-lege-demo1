// 就是来管理数据的
import handle from "./index"

let reducer = (state={...handle.state},action:{type:string,val:number})=>{
    let newState = JSON.parse(JSON.stringify(state))
    for (const key in handle.actionName) {
    //    判断是不是相等
    if(action.type===handle.actionName[key]){
        handle.actions[handle.actionName[key]](newState,action)
        break
    }
    }

    return newState
}


export default reducer

