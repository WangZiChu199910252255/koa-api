import Job from '../model/Job'
import Student from '../model/Student'
import Homework from '../model/Home_work'
import Grade from '../model/Grade'
class StudentService{
    getAdminById(adminId:number){
        return Student.findByPk(adminId)
    }
    getAdminListByPage(page:number=1,limit:number=15){
        return Student.findAndCountAll({
            limit: limit,
            offset: (page-1)
        })
    }
    getAdminByName(name:string){
        return Student.findOne({
            where:{
                name:name
            }
        })
    }
    getJobListByStudentId(studentId:number){
        return Job.findAll({
            where:{
                students_id:studentId,
            },
            attributes:['homeworks_id','state','achievement','jobsdata'],
            include:[{
                model: Homework,
                attributes:['name']
            }]
        })
    }
    getJobByStudentIdPage(studentId:number,page:number=1){
        return Job.findAll({
             where:{
                students_id: studentId
             },
             attributes:['homeworks_id','state','achievement','jobsdata'],
             include:[{
                 model: Homework,
                 attributes:['name']
             }],
             limit: 14,
             offset: (page-1)*14
        })
    }
    getUserByStudentId(studentId:number){
        return Student.findOne({
            where:{
                id:studentId
            },
            include:[{
                model: Grade
            }]
        })
    }
    getJobByStudentIdAndHomeworkId(obj:{studentId:number,homeworkId:number}){
        const {studentId,homeworkId} = obj
        return Job.findOne({
            where:{
                homeworks_id:homeworkId,
                students_id:studentId,
            }
        })
    }
    getStudentMax(studentId:number){
        return Job.count({
            where: {
                students_id:studentId,
            }
        })
    }
    addAdmin(admin: any) {
        return Student.create(admin)
    }  
    updateAdmin(id:number,admin:any){
        return Student.update(admin,{where:{id}})
    }
    deleteAdmin(id:number){
        return Student.destroy({where:{id}})
    }
}
export default new StudentService