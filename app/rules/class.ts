import { Rules } from "async-validator";

const getByClassId:Rules = {
    classId:[{
        type:'number',
        required:true,
        message:'为输入要查询班级'
    }]
}

export { getByClassId }