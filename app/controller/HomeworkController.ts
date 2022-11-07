import { Context } from "koa";
import response from "../../utils/response";
import HomeworkService from "../service/HomeworkService";
import ClassService from '../service/ClassService'
import validate from "../../utils/validate"
import {issueHomework,getStudentByClassId,getHomeworkByTeacherId,issueChoose,paging, getHomeworkByTeacherIdPage,getChooseByGrouping,getHomeworkByJobId,writingHomework} from '../rules/homework';
import Student from "../model/Student";
import {ChooseType,PagingType,teacherId} from '../interface/homework'
import { getClassListByTeacherId } from "../rules/teacher";
class HomeworkController{
    async issueHomework(ctx: Context){
        const {data,error} = await validate<{homeworkData:Object,teacherId:number,classId:number,name:string}>(ctx,issueHomework)
        if(error !== null){
            return response.error(ctx,error)
        }
        const classData =  await HomeworkService.addHomework(data)
        const studentArr = await ClassService.getStudentByClassId(data.classId)
        const newObj = studentArr[0].getDataValue('Students').map((item:Student) => ({students_id: item.getDataValue('id') as number,homeworks_id:classData.getDataValue('id') as number,state:0,achievement:0}))
        const homeworkData = await HomeworkService.addJob(newObj)
        response.success(ctx,{homeworkData},"获取成功")
    }
    async getChooseByGrouping(ctx: Context){
        const {data,error} = await validate<{grouping:string}>(ctx,getChooseByGrouping)
        if(error !== null){
            return response.error(ctx,error)
        }
        const groupingData = await HomeworkService.getChooseByGrouping(data.grouping)
        response.success(ctx,{groupingData},"获取成功")
    }
    async issueChoose(ctx: Context){
        const {data,error} = await validate<{chooseArr:ChooseType[]}>(ctx,issueChoose)
        if(error !== null){
            return response.error(ctx,error)
        }
        const classData =  await HomeworkService.addChoose(data.chooseArr)
        response.success(ctx,{classData},"添加成功")
    }
    async getChoose(ctx: Context){
        const {data,error} = await validate<PagingType>(ctx,paging)
        if(error !== null){
            return response.error(ctx,error)
        }
        const chooseArr =  await HomeworkService.getChoose(data.page,data.limit)
        response.success(ctx,{chooseArr},"获取成功")
    }
    async getChooseMax(ctx: Context){
        const chooseMax = await HomeworkService.getChooseMax()
        response.success(ctx,{chooseMax},"获取成功")
    }
    async getHomeworkByTeacherIdPage(ctx: Context){
        const {data,error} = await validate<PagingType & teacherId>(ctx,getHomeworkByTeacherIdPage)
        if(error !== null){
            return response.error(ctx,error)
        }
        const HomeworkArr = await HomeworkService.getHomeworkByTeacherIdPage(data.teacherId,data.page)
        response.success(ctx,{HomeworkArr},"获取成功")
    }
    async getHomeworkByTeacherIdMax(ctx: Context){
        const {data,error} = await validate<teacherId>(ctx,getClassListByTeacherId)
        if(error !== null){
            return response.error(ctx,error)
        }
        const chooseMax = await HomeworkService.getHomeworkByTeacherIdMax(data.teacherId)
        response.success(ctx,{chooseMax},"获取成功")
    }
    async getHomeworkByClassId(ctx: Context){
        const {data,error} = await validate<{classId:number,homeworkId:number}>(ctx,getStudentByClassId)
        if(error !== null){
            return response.error(ctx,error)
        }
        const studentArr = await HomeworkService.getStudentByClassId(data.classId,data.homeworkId)
        let studentJobArr  = studentArr[0].getDataValue('HomeWorks')[0].getDataValue('Students').map((item:Student) => item.getDataValue('Job'))
        response.success(ctx,{studentJobArr},"获取成功")
    }
    async getHomeworkByTeacherId(ctx: Context){
        const {data,error} = await validate<{teacherId:number;classId:number}>(ctx,getHomeworkByTeacherId)
        if(error !== null){
            return response.error(ctx,error)
        }
        const studentArr = await HomeworkService.getHomeworkByTeacherId(data)
        response.success(ctx,{studentArr},"获取成功")
    }
    async getHomeworkByJobId(ctx: Context){
        const {data,error} = await validate<{homeworkId:number}>(ctx,getHomeworkByJobId)
        if(error !== null){
            return response.error(ctx,error)
        }
        const homeworkData = await HomeworkService.getHomeworkByJobId(data)
        response.success(ctx,{homeworkData},"获取成功")
    }
    async writingHomework(ctx: Context){
        const {data,error} = await validate<{data:string,homeworkId:number,studentId:number,achievement:number}>(ctx,writingHomework)
        if(error !== null){
            return response.error(ctx,error)
        }
        const homeworkData = await HomeworkService.writingHomework(data)
        response.success(ctx,{homeworkData},"获取成功")
    }
}
export default new HomeworkController