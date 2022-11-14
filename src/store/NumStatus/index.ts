const store =  {
  state: {
    num: 20,
  },

  actions: {
    // 只放同步的方法
    add1(newState: { num: number }, action:{type:string}) {  
      newState.num++
    },
    add2(newState: { num: number }, action:{type:string }) {  
      newState.num++
    },

    add3(newState: { num: number }, action: { type: string, val: number }) {
      newState.num += action.val;
    },
  },

  asyncActions:{
    // 异步的方法
  asyncAdd1(dispatch:Function){
    setTimeout(()=>{
        dispatch({type:"add1"})
    },1000)
    },

  


  },


  actionName:{
    add1: "add1",
    add2: "add2",
    add3: "add3",
  }

 

};
export default store;