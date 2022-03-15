import { Context } from "koa";
import response from "../../utils/response";
import HomeworkService from "../service/HomeworkService";
import ClassService from '../service/ClassService'
import validate from "../../utils/validate"
import {issueHomework,getStudentByClassId} from '../rules/homework';
import Student from "../model/Student";
import { getByClassId } from "../rules/class";
class HomeworkController{
    async issueHomework(ctx: Context){
        const {data,error} = await validate<{homeworkData:Object,teacherId:number,classId:number}>(ctx,issueHomework)
        if(error !== null){
            return response.error(ctx,error)
        }
        data.homeworkData = JSON.stringify(data.homeworkData)
        const classData =  await HomeworkService.addHomework(data)
        const studentArr = await ClassService.getStudentByClassId(data.classId)
        const newObj = studentArr[0].getDataValue('Students').map((item:Student) => ({students_id: item.getDataValue('id') as number,homeworks_id:classData.getDataValue('id') as number,state:0}))
        const homeworkData = await HomeworkService.addJob(newObj)
        response.success(ctx,{homeworkData},"获取成功")
    }
    async getHomeworkByClassId(ctx: Context){
        const {data,error} = await validate<{classId:number,homeworkId:number}>(ctx,getStudentByClassId)
        if(error !== null){
            return response.error(ctx,error)
        }
        const studentArr = await HomeworkService.getStudentByClassId(data.classId,data.homeworkId)
        response.success(ctx,{studentArr},"获取成功")
    }
}
export default new HomeworkController