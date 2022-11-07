import { Context } from "koa";
import response from "../../utils/response";
import validate from "../../utils/validate";
import StudentService from '../service/StudentService'
import { getHomeworkByStudentIdPage, getJobListByStudentId,getJobByStudentIdHomeworkId } from "../rules/student";
import { PagingType } from "../interface/homework";
class StudentController {
    async getJobListByStudentId(ctx: Context){
        const {data,error} = await validate<{studentId:number}>(ctx,getJobListByStudentId)
        if(error !== null){
            return response.error(ctx,error)
        }
        const dataArr = await StudentService.getJobListByStudentId(data.studentId)
        response.success(ctx,{dataArr},"获取成功d")
    }
    async getStudentMax(ctx: Context){
        const {data,error} = await validate<{studentId:number}>(ctx,getJobListByStudentId)
        if(error !== null){
            return response.error(ctx,error)
        }
        const dataArr = await StudentService.getStudentMax(data.studentId)
        response.success(ctx,{dataArr},"获取成功")
    }
    async getHomeworkByStudentIdPage(ctx: Context){
        const {data,error} = await validate<PagingType & {studentId:number}>(ctx,getHomeworkByStudentIdPage)
        if(error !== null){
            return response.error(ctx,error)
        }
        const HomeworkArr = await StudentService.getJobByStudentIdPage(data.studentId,data.page)
        response.success(ctx,{HomeworkArr},"获取成功")
    }
   async getUserByStudentId(ctx: Context){
    const {data,error} = await validate<{studentId:number}>(ctx,getJobListByStudentId)
    if(error !== null){
        return response.error(ctx,error)
    }
    const userData = await StudentService.getUserByStudentId(data.studentId)
    response.success(ctx,{userData},"获取成功")
   }
   async getJobByStudentIdAndHomeworkId(ctx: Context){
    const {data,error} = await validate<{studentId:number;homeworkId:number}>(ctx,getJobByStudentIdHomeworkId)
    if(error !== null){
        return response.error(ctx,error)
    }
    const homeworkData = await StudentService.getJobByStudentIdAndHomeworkId(data)
    response.success(ctx,{homeworkData},"获取成功")
   }
}
export default new StudentController