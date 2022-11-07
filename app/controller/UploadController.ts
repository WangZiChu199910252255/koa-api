import { Context } from "koa";
import response from "../../utils/response";
import fs from 'fs'
import path from "path";
class UploadController{
    upload = (ctx: Context) => {
        const file = ctx.request.files?.file as unknown as File;
        if(file){
            const fileType = file.type
            const typeSet = new Set(['image/jpeg', 'image/jpg','image/png','image/gif'])
            if(typeSet.has(fileType)){
                response.error(ctx,'非法文件上传')
            } 
            //@ts-ignore
            const reader = fs.createReadStream(file.path)
            //@ts-ignore
            const ext = path.extname(file.name)
            const filePath = '/upload/'+this.randomStr(32)+ext
            //@ts-ignore
            const writer = fs.createWriteStream('static'+filePath)
            reader.pipe(writer)
            response.success(ctx,{file:filePath})
        }else{
            response.error(ctx,"文件不能为空")
        }
    }
    randomStr = (length: number):string => {
        const seeder = 'ABCDEFGHIGKLMNOPQRSTUVWXYZabcdefghizklmnopqrstuvwxyz123456789'
        let randomStr = ''
        for(let i = 0 ; i < length ; i++){
            randomStr += seeder.charAt(Math.floor(Math.random()*seeder.length))
        }
        return randomStr
    }
}

export default new UploadController