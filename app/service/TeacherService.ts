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
    getAdminByName(name:string){
        return Teacher.findOne({
            where:{
                name:name
            }
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