import Grade from '../model/Grade'
import Student from '../model/Student'
import Teacher from '../model/Teacher'
import Tg from '../model/Teachers_grade'
import TlStudentsHomework from '../model/Job'
class ClassService{
    getClassByClassId(classId:number){
        return Grade.findOne({
            where:{
                class_id:classId
            }
        })
    }
    getStudentByClassId(classId:number){
        return Grade.findAll({
            where:{
                class_id:classId
            },
            attributes:['id'],
            include:[
                {
                    model:Student,
                    attributes:['id']
                }
            ]
        })
    }
    async getClassArrayByTeacherId(teacherId:number){
        const gradesIdArray = await Teacher.findAll({
            where:{
                id:teacherId
            },
            include:[
                {
                    model:Grade,
                    include:[
                        {
                            model:Student
                        }
                    ]
                }
            ]
        })
        return gradesIdArray
    }
}
export default new ClassService