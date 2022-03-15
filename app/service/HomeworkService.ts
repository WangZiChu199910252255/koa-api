import Grade from '../model/Grade'
import Homework from '../model/Home_work'
import Student from '../model/Student'
import Job from '../model/Job'
import Teachers_grade from '../model/Teachers_grade'
class HomeworkService {
    getHomeworkByClassId(classId: number){
        return Homework.findAll({
            where:{
                class_id:classId,
            }
        })
    }
    async addHomework(obj:{classId: number,teacherId: number,homeworkData: any}){
        const {classId,teacherId,homeworkData} = obj
        return await Homework.create({
            class_id: classId,
            homework_data: homeworkData,
            teacher_id: teacherId
        })
    }
   async addJob(objArr:{homeworks_id: number,students_id: number,state:number}[]){
       return await Job.bulkCreate(objArr)
   }
   async getStudentByClassId(classId: number,homeworkId: number){
       return Grade.findAll({
           where:{
               id: classId,
           },
           include:[{
               model:Homework,
               where:{
                   id:homeworkId
               },
               include:[{
                   model:Student,
                   attributes:['id','userName']
               }]
           }]
       })
   }
}
export default new HomeworkService