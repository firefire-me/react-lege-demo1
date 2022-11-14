import { useSelector, useDispatch  } from "react-redux";
import numStatus  from "@/store/NumStatus"

const View = ()=>{
      // 通过useDspatch修改厂库数据
      const dispatch = useDispatch()
    // 获取厂库数据
    const {num,sarr} = useSelector((state:RootState)=>({
        num: state.handleNum.num ,
        sarr: state.handleArr.sarr
    }))

  

    const changeNum = ()=>{
        // dispatch({type:"(认为是一个记号)", val })
        dispatch({type:"add1"})
        // dispatch({type:"add2",val:10})
    }

    const changeNum2 = ()=>{
        // dispatch((dis:Function)=>{
        //     setTimeout(()=>{
        //         dis({type:"add1"})
        //     },1000)
        // })
        dispatch(numStatus.asyncActions.asyncAdd1)
    }

    const changeNum3 =()=>{
        dispatch({type:'add3',val: 12})
    }


   
    const changeArr = ()=>{
        dispatch({type:"sarrpush",val:100})
    }
   


    return(
        
        <div className="home">
            <p>这是page1页面</p>
            <p>{num}</p>
            <button onClick={changeNum}>按钮同步+ 1</button>
            <button onClick={changeNum3}>按钮同步+ 12</button>
            <button onClick={changeNum2}>按钮异步+ 1</button>
            <p>{sarr}</p>
            <button onClick={changeArr}>按钮</button>
        </div>
    )
}

export default View