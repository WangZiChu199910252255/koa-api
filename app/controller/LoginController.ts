import { Context } from "koa"
import { sign } from "../../utils/auth"
import TeacherService from "../service/TeacherService"
import StudentService from '../service/StudentService';
import response from '../../utils/response'
import validate from "../../utils/validate"
import { Rules } from "async-validator"
class LoginController{
    async index(ctx:Context){
        const rules:Rules = {
            name:[
                {
                    type: "string",
                    required: true,
                    message: "用户名不能为空"
                }
            ],
            password:[
                {
                    type: "string",
                    required: true,
                    message: "密码不能为空"
                }
            ]
        }
        interface IAdmin{
            name: string
            password: string
        }

        const {data,error} = await validate<IAdmin>(ctx,rules)
        console.log(data,error)
        if(error !== null){
            return response.error(ctx,error)
        }
        const admin = await TeacherService.getAdminByName(data.name)
        if(admin === null){
            return response.error(ctx,'该人员不存在',{})
        }
        const token = sign(admin)
        response.success(ctx,{token},"登录成功")
    }
}
export default new LoginController