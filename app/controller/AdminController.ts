import { Rules } from "async-validator";
import { Context } from "koa";
import paginate from "../../utils/paginate";
import response from "../../utils/response";
import TeacherService from "../service/TeacherService";
import StudentService from "../service/StudentService";
import validate from "../../utils/validate"
import { createHash } from "crypto";

class AdminController{
    async getAdminList(ctx: Context){
        const usp =  new URLSearchParams(ctx.querystring)
        let page = 1 , limit = 15
        if(usp.get('limit') !== null && isNaN(Number(usp.get('limit')))){
            limit =Number(usp.get('limit'))
        }
        if(usp.get('page') !== null && isNaN(Number(usp.get('page')))){
            page = Number(usp.get('page'))
        }
        const {rows,count} = await TeacherService.getAdminListByPage(page, limit)
        response.success(ctx,paginate(rows,page,count,limit))
    }
    async addAdmin(ctx: Context){
        console.log(123)
        const rules:Rules = {
            name:[{
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
        interface IAdmin{
            id:number,
            name:string,
            password:string,
            username:string,
            grades_id:number,
            identity: string,

        }
        const {data,error} = await validate<IAdmin>(ctx,rules)
        if(error !== null){
            return response.error(ctx,error)
        }
        data.password = createHash('md5').update(data.password).digest('hex')
        let admin
        let row
        if(data.identity === "student"){
            admin = await StudentService.getAdminByName(data.name)
        }else{
            admin = await TeacherService.getAdminByName(data.name)
        }
        if(admin !== null){
            return response.error(ctx,'用户已经存在')
        }
        if(data.identity === "student"){
            row = await StudentService.addAdmin(data)
        }else{
            row = await TeacherService.addAdmin(data)
        }
         
        if(row.id > 0){
            return response.success(ctx,{},"注册成功")
        }
        return response.error(ctx,'添加失败')
    }   
    async updateAdmin(ctx: Context){
        const id = ctx.params['id'] as number
        const admin = await TeacherService.getAdminById(id)
        console.log(admin,id)
        if(admin === null){
            response.error(ctx,"管理员不存在")
        }
        const rules:Rules={
            name:[{
                type:'string',
                required:true,
                message:'用户名不能为空'
            }]
        }
        interface IAdmin{
            name:string,
            password:string,
        }
        const {data,error} = await validate<IAdmin>(ctx,rules)
        if(error !== null){
            return response.error(ctx,error)
        }
        if(data.password!==undefined&&data.password !== ''){
            data.password = createHash('md5').update(data.password).digest('hex')
        }
        const [number] = await TeacherService.updateAdmin(id,data)
        if(number>0){
            return response.success(ctx)
        }else{
            return response.error(ctx,"更新失败")
        }
    }
    async deleteAdmin(ctx: Context){
        const id = ctx.params['id'] as number
        const admin = await TeacherService.getAdminById(id)
        if(admin === null){
            return response.error(ctx,"管理员不存在")
        }
        const row = await TeacherService.deleteAdmin(id)
        if( row > 0){
            return response.success(ctx)
        }
        return response.error(ctx,"删除失败")
    }
}
export default new AdminController