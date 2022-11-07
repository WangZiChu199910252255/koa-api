import { Rules } from "async-validator";

const getClassListByTeacherId:Rules = {
    teacherId:[{
        type:'number',
        required:true,
        message:'为输入要查询老师'
    }]
}

export { getClassListByTeacherId }