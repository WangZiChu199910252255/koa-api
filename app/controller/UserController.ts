/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-14 15:54:29
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-15 16:02:10
 * @FilePath: /koa-api/app/controller/UserController.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Rules } from "async-validator";
import { Context } from "koa";
import UserService from '../service/UserService'
import response from "../../utils/response";
import validate from "../../utils/validate"
import { UserType } from '../interface/user'

class UserController{
    async addUser(ctx: Context){
        const rules:Rules = {
            username:[{
                type:'string',
                required:true,
                message:'用户名不能为空'
            }],
            password:[
            {
                type:'string',
                required:true,
                message:'密码不能为空'
            },{
                type:'string',
                min:6,
                message:'密码长度不能小于6位'
            }]
        }
        const {data,error} = await validate<UserType>(ctx,rules)
        if(error !== null){
            return response.error(ctx,error)
        }
        const user = await UserService.getUserByName(data.username)
        if(user !== null){
            return response.error(ctx,'用户已经存在')
        }
        const row = await UserService.addUser(data)
        console.log(row,user)
        if(row.id > 0){
            return response.success(ctx,{},"注册成功")
        }
        return response.error(ctx,'添加失败')
    }   
    async updateUser(ctx: Context){
        const username = ctx.params['username'] as string
        const user = await UserService.getUserByName(username)
        if(user === null){
            response.error(ctx,"用户不存在")
        }
        const rules:Rules={
            username:[{
                type:'string',
                required:true,
                message:'用户名不能为空'
            }]
        }
        const {data,error} = await validate<UserType>(ctx,rules)
        if(error !== null){
            return response.error(ctx,error)
        }
        const number = await UserService.updateUser(username,data)
        console.log(number[0])
        if(number[0] > 0){
            return response.success(ctx)
        }else{
            return response.error(ctx,"更新失败")
        }
    }
}
export default new UserController