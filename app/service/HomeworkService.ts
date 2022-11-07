import Grade from '../model/Grade'
import Homework from '../model/Home_work'
import Student from '../model/Student'
import Job from '../model/Job'
import Teachers_grade from '../model/Teachers_grade'
import Teacher from '../model/Teacher'
import Choose from '../model/Choose'
class HomeworkService {
    getHomeworkByClassId(classId: number){
        return Homework.findAll({
            where:{
                class_id:classId,
            }
        })
    }
    async addHomework(obj:{classId: number,teacherId: number,homeworkData: any,name: string}){
        const {classId,teacherId,homeworkData,name} = obj
        return await Homework.create({
            class_id: classId,
            homework_data: homeworkData,
            teacher_id: teacherId,
            name: name
        })
    }
   async addJob(objArr:{homeworks_id: number,students_id: number,state:number,achievement: number,jobsdata?:string}[]){
        return await Job.bulkCreate(objArr)
   }
   addChoose(obj:{title:string,options: string,grouping: string,answer: string,difficulty:number}[]){
        return Choose.bulkCreate(obj)
   }
   getChoose(page:number=1,limit:number=15){
        return Choose.findAll({
            limit: limit,
            offset: (page-1)*limit
        })
   }
   getHomeworkByTeacherIdPage(teacherId:number,page:number=1){
       return Homework.findAll({
            where:{
                teacher_id: teacherId
            },
            limit: 14,
            offset: (page-1)*14
       })
   }
   getChooseByGrouping(grouping:string){
       return Choose.findAll({
           where:{
               grouping:grouping
           }
       })
   }
   getChooseMax(){
    return Choose.count()
   }
   getHomeworkByTeacherIdMax(teacherId:number){
    return Homework.count({
        where:{
            teacher_id: teacherId
        }
    })
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
   async getHomeworkByTeacherId(obj:{teacherId: number;classId: number}){
       return Homework.findAll({
            where:{
                teacher_id: obj.teacherId,
                class_id: obj.classId
            },
            include:[{
                model:Job,
            }]
       })
   }
   async getHomeworkByJobId(obj:{homeworkId: number}){
       const {homeworkId} = obj
       return Homework.findOne({
           where:{
                id:homeworkId
           }
       })
   }
   writingHomework(obj:{data:string,homeworkId:number,studentId:number,achievement:number}){
       const {data,homeworkId,studentId,achievement} = obj
       return Job.update({jobsdata:'',achievement:achievement,state:1},{
           where:{
               homeworks_id:homeworkId,
               students_id:studentId
           }
       })
   }
}
export default new HomeworkService