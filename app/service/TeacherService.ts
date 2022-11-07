import Grade from '../model/Grade'
import Teacher from '../model/Teacher'
class TeacherService{
    getAdminById(adminId:number){
        return Teacher.findByPk(adminId)
    }
    getAdminListByPage(page:number=1,limit:number=15){
        return Teacher.findAndCountAll({
            limit: limit,
            offset: (page-1)
        })
    }
    getClassListByTeacherId(teacherId:number){
        return Teacher.findAll({
            where: {
                id: teacherId
            },
            include:[{
                model: Grade,
                attributes:['class_id','class_name']
            }]
        })
    }
    getAdminByName(name:string){
        return Teacher.findOne({
            where:{
                name:name
            }
        })
    }
    getClassNameByTeacherId(teacherId:number){
        return Teacher.findOne({
            where:{
                id: teacherId
            },
            include:[{
                model:Grade
            }]
        })
    }
    addAdmin(admin: any) {
        return Teacher.create(admin)
    }  
    updateAdmin(id:number,admin:any){
        console.log(id,admin)
        return Teacher.update(admin,{where:{id}})
    }
    deleteAdmin(id:number){
        return Teacher.destroy({where:{id}})
    }
}
export default new TeacherService