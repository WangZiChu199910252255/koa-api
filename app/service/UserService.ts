/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-14 15:00:10
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-02-16 14:04:07
 * @FilePath: /koa-api/app/service/UserService.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import User from '../model/User'
import { UserType } from '../interface/user'


export default new class UserService{
    addUser(user:UserType){
        return User.create(user)
    }
    deleteUser(id:number){
        return User.destroy({where:{id}})
    }
    getUserByName(username:string){
        return User.findOne({
            where:{
                username:username
            }
        })
    }
    updateUser(username:string,user:UserType){
        return User.update(user,{where:{username}})
    }
    
}