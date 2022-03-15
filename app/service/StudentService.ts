import Student from '../model/Student'
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