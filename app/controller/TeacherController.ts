import { Context } from "koa";
import response from "../../utils/response";
import TeacherService from '../service/TeacherService'
import validate from "../../utils/validate"
import {getClassListByTeacherId} from '../rules/teacher';
class HomeworkController{
    async getClassListByTeacherId(ctx: Context){
        const {data,error} = await validate<{teacherId:number}>(ctx,getClassListByTeacherId)
        if(error !== null){
            return response.error(ctx,error)
        }
        const classData =  await TeacherService.getClassListByTeacherId(data.teacherId)
        response.success(ctx,{classData},"获取成功")
    }
    async getClassNameByTeacherId(ctx: Context){
        const {data,error} = await validate<{teacherId:number}>(ctx,getClassListByTeacherId)
        if(error !== null){
            return response.error(ctx,error)
        }
    }
}
export default new HomeworkController