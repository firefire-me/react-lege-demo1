import styles from "./login.module.scss";
import { Input, Space, Button ,message} from "antd";
import initLoginBg from "./init.ts";
import { ChangeEvent, useEffect,useState } from "react";
import img1 from "@/assets/imgs/t1.png";
import {useNavigate} from "react-router-dom"
import "./login.less";
import { CaptchaAPI, LoginAPI } from "@/request/api";


const view = () => {
  let navigateTo = useNavigate()

  useEffect(()=>{
    
    getCaptchaImg()
  },[])
  
  //   获取用户输入的信息
    const [usernameVal, setUsernameVal] = useState("")
    const [passwordVal, setPasswordVal] = useState("")
    const [captchaVal, setCaptchaVal] = useState("")


    const [captchaImg,setCaptchaImg] = useState("")


  const usernameChange = (e:ChangeEvent<HTMLInputElement>)=>{

    setUsernameVal(e.target.value);

  }
  const passwordChange = (e:ChangeEvent<HTMLInputElement>)=>{

    setPasswordVal(e.target.value);

  }
  const captchaChange = (e:ChangeEvent<HTMLInputElement>)=>{
    setCaptchaVal(e.target.value);
  }

// 点击登录按钮的事件
const gotoLogin = async ()=>{
    console.log("用户输入的用户名，密码，验证码:" , usernameVal,passwordVal,captchaVal );

    if(!usernameVal.trim() || !passwordVal.trim() || !captchaVal.trim()){
      // alert("请完整输入信息！")
      message.warning("请输入完整信息!")
      return
    }

    let loginAPIRes = await LoginAPI({ 
      username: usernameVal,
      password:passwordVal,
      code:captchaVal,
      uuid: localStorage.getItem("uuid") as string
     })

     console.log(loginAPIRes);

     if(loginAPIRes.code === 200){
      // 提示登录成功
      message.success("登录成功!")
      // 保持token
      localStorage.setItem("lege-react-management-token", loginAPIRes.token )
      // 挑战到page1
      navigateTo("/page1")
      // 删除uuid
      localStorage.removeItem("uuid")

     }
     

}
// 点击验证码图片盒子的事件函数
const getCaptchaImg = async ()=>{
  // 做验证码的请求

  // captchaAPI().then((res)=>{
  //   console.log(res);
  // })
  let captchaAPIRes = await CaptchaAPI().then();
  console.log(captchaAPIRes);

  if(captchaAPIRes.code===200){
    // 1. 把图片数据显示在img上面
    setCaptchaImg("data:image/gif;base64,"+captchaAPIRes.img)

    // 2. 本地保持uuid 登录的时候用
    localStorage.setItem("uuid",captchaAPIRes.uuid)


  }


}



  return (
    <>
      <div className={styles.loginPage}>
        {/* 存放背景 */}
        {/* <canvas id='canvas' style={{display:"block"}}></canvas> */}

        <div className={styles.loginBox}>
          {/* 标题部分 */}
          <div className={styles.title}>
            <h1>前端乐哥&nbsp;&nbsp;通用后台系统</h1>
            <p>Strive Everyday</p>
          </div>
          {/* 表单部分 */}
          <div className="form">
            <Space
              direction="vertical"
              size="large"
              style={{ display: "flex" }}
            >
              <Input placeholder="用户名"  onChange={usernameChange} />
              <Input.Password placeholder="密码" onChange={passwordChange}  />
              <div className={styles.captchaBox}>
                <Input placeholder="验证码" onChange={captchaChange} />
                <div className={styles.captchaImg} onClick={getCaptchaImg  }>
                  {/* <img height="38px" src={img1} alt="" /> */}
                  <img height="38px" src={captchaImg} alt="" />
                </div>
              </div>
              <Button type="primary" className="loginBtn"  block onClick={gotoLogin}>
                登录
              </Button>
            </Space>
          </div>
        </div>
      </div>
    </>
  );
};

export default view;
