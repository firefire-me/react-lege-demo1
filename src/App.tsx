import { useState,useEffect } from 'react'

import {useRoutes,useLocation, useNavigate} from "react-router-dom"
import router from './router'
import {message} from "antd"


// 去往首页
function ToLogin (){
  const navigateTo =useNavigate()
  // 加载完实现跳转
  useEffect(()=>{
    // 加载完组件之后执行代码
    navigateTo("/login")
    message.warning("您还没有登录,请登录后再访问!")
  },[])

  return <div></div>
}
// 去往登录页面
function ToPage1 (){
  const navigateTo =useNavigate()

  useEffect(()=>{
    // 加载完组件之后执行代码
    navigateTo("/page1")
    message.warning("您已经登录了!")
  },[])

  return <div></div>
}


function BeforeRouterEnter() {
  const outlet=useRoutes(router);

  /*
   后台管理系统的两种经典跳转情况:
   1. 如果访问的是登录界面， 并且有token,
   2. 如果访问的不是登录界面，并且没有token,
   3. 其余的都可以正常放行
  */
 const location=useLocation()
 let token = localStorage.getItem("lege-react-management-token")
  if(  location.pathname ==="/login" && token){
    // 这里不能使用useNabvigate  需要是一个正常的jsx组件

    return  <ToPage1 />
  }

  if( location.pathname !=="/login" && !token){
    // 这里不能使用useNabvigate  需要是一个正常的jsx组件

    return  <ToLogin />
  }



  return outlet
}


function App() {
  const [count, setCount] = useState(0)
  

  return (  
    <div className="App">

      {/* <Link to="/home">Home</Link> |
      <Link to="/user">User</Link> |
      <Link to="/about">About</Link> */}
      {/* <Outlet></Outlet> */}
      {/* {outlet} */}
      <BeforeRouterEnter />
    </div>
  )
}

export default App
