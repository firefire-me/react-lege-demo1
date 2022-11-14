// 这个文件专门定义请求参数的类型和响应的类型

// 验证码的响应约束
interface CaptchaAPIRes {
    msg: string;
    img: string;
    code: number;
    captchaEnabled: boolean;
    uuid: string;
}

interface LoginAPIRes{
    msg: string,
    code:number,
    token:string

}

interface LoginAPIReq{
    username: string,
    password:string,
    code:string,
    uuid:string

}






