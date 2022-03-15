import { Context } from "koa";
import AdminService from "../service/AdminService";
class IndexController{
    async index(ctx:Context){
        console.log(123)
        const admin = await AdminService.getAdminById(1);
        ctx.body = admin
    }
}
export default new IndexController