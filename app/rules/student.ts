import { Rules } from "async-validator";

const getJobListByStudentId:Rules = {
    studentId:[{
        type:'number',
        required:true,
        message:'为输入要查询学生'
    }]
}
const getHomeworkByStudentIdPage:Rules = {
    page:[{
        type:'number',
        required:true,
        message:'请输入页数'
    }],
    studentId:[{
        type:'number',
        required:true,
        message:'为输入要查询学生'
    }],
}
const getJobByStudentIdHomeworkId:Rules = {
    studentId:[{
        type:'number',
        required:true,
        message:'为输入要查询学生'
    }],
    homeworkId:[{
        type:'number',
        required:true,
        message:'为输入要查询作业'
    }]
}
export { getJobListByStudentId ,getHomeworkByStudentIdPage,getJobByStudentIdHomeworkId}