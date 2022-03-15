import { Context } from "koa";
import response from "../../utils/response";
import ClassService from "../service/ClassService";
import validate from "../../utils/validate"
import { getByClassId } from '../rules/class'
import { ClassId } from '../interface/class';
class ClassController{
    async getClassByClassId(ctx: Context){
        const {data,error} = await validate<ClassId>(ctx,getByClassId)
        if(error !== null){
            return response.error(ctx,error)
        }
        console.log(data.classId)
        const classData =  await ClassService.getClassByClassId(data.classId)
        console.log(classData)
        response.success(ctx,{classData},"获取成功")
    }
    async getStudentByClassId(ctx: Context){
        const {data,error} = await validate<ClassId>(ctx,getByClassId)
        if(error !== null){
            return response.error(ctx,error)
        }
        console.log(data.classId)
        const classData =  await ClassService.getStudentByClassId(data.classId)
        console.log(classData)
        response.success(ctx,{classData},"获取成功")
    }
}
export default new ClassController