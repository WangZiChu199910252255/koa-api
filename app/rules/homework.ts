import { Rules } from "async-validator";

const issueHomework:Rules = {
    teacherId:[{
        type:'number',
        required:true,
        message:'教师id错误'
    }],
    homeworkData:[{
        type:'string',
        required:true,
        message:'请输入作业'
    }],
    name:[{
        type:'string',
        required:true,
        message:'请输入作业名称'
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
const getHomeworkByTeacherId:Rules = {
    teacherId:[{
        type:'number',
        required:true,
        message:'请输入教师id'
    }],
    classId:[{
        type:'number',
        required:true,
        message:'请输入班级id'
    }]
}
const issueChoose:Rules = {
    chooseArr: [{
        type: 'array',
        required: true,
        defaultField: {
            type: "object",
            required: true,
            fields: {
                title:[{
                    type:'string',
                    required:true,
                    message:'请输入题目'
                }],
                options:[{
                    type:'string',
                    required:true,
                    message:'请输入选项'
                }],
                grouping:[{
                    type:'string',
                    required:true,
                    message:'请输入类型'
                }],
                answer:[{
                    type:'string',
                    required:true,
                    message:'请输入答案'
                }],
                difficulty:[{
                    type:'number',
                    required:true,
                    message:'请输入难度' 
                }]
            }
        }
   }]
}
const paging:Rules = {
    limit:[{
        type:'number',
        required:true,
        message:'输入每页条数'
    }],
    page:[{
        type:'number',
        required:true,
        message:'请输入页数'
    }]
}
const getHomeworkByTeacherIdPage:Rules = {
    page:[{
        type:'number',
        required:true,
        message:'请输入页数'
    }],
    teacherId:[{
        type:'number',
        required:true,
        message:'请输入教师id'
    }],
}
const getChooseByGrouping:Rules = {
    grouping:[{
        type:'string',
        required:true,
        message:'请输入作业类型'
    }]
}
const getHomeworkByJobId:Rules = {
    homeworkId:[{
        type:'number',
        required:true,
        message:'请输入作业类型'
    }]
}
const writingHomework:Rules = {
    data:[{
        type:'string',
        required:true,
        message:'请填写'
    }],
    homeworkId:[{
        type:'number',
        required:true,
        message:'请输入作业id'
    }],
    studentId:[{
        type:'number',
        required:true,
        message:'请输入学生id'
    }],
    achievement:[{
        type:'number',
        required:true,
        message:'请输入本次作业成绩'
    }]
}
export { 
    issueHomework,
    getStudentByClassId,
    getHomeworkByTeacherId,
    issueChoose,
    paging,
    getHomeworkByTeacherIdPage,
    getChooseByGrouping,
    getHomeworkByJobId,
    writingHomework
}