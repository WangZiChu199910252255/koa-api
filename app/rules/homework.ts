import { Rules } from "async-validator";

const issueHomework:Rules = {
    teacherId:[{
        type:'number',
        required:true,
        message:'教师id错误'
    }],
    homeworkData:[{
        type:'object',
        required:true,
        message:'请输入作业'
    }]
}

const getStudentByClassId:Rules = {
    classId:[{
        type:'number',
        required:true,
        message:'请输入班级'
    }],
    homeworkId:[{
        type:'number',
        required:true,
        message:'请输入作业id'
    }]
}

export { issueHomework , getStudentByClassId}