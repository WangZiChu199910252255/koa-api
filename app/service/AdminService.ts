import Admin from '../model/Admin'
class AdminService{
    getAdminById(adminId:number){
        console.log(Admin)
        return Admin.findByPk(adminId)
    }
    getAdminListByPage(page:number=1,limit:number=15){
        return Admin.findAndCountAll({
            limit: limit,
            offset: (page-1)
        })
    }
    getAdminByName(name:string){
        return Admin.findOne({
            where:{
                name:name
            }
        })
    } 
    addAdmin(admin: any) {
        return Admin.create(admin)
    }  
    updateAdmin(id:number,admin:any){
        console.log(id,admin)
        return Admin.update(admin,{where:{id}})
    }
    deleteAdmin(id:number){
        return Admin.destroy({where:{id}})
    }
}
export default new AdminService