/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-02-14 14:35:57
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-03-02 17:30:32
 * @FilePath: /koa-api/app/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import dotenv from 'dotenv'
dotenv.config()
import db from './db'
db()
import Koa from 'koa'
import router from './router'
import AccessLogMiddleware from './middleware/AccessLogMiddleware'
import { Server } from 'http'
import koaBody from 'koa-body';
import KoaStatic from 'koa-static';
import path from 'path'
const app = new Koa
app
    .use(koaBody({
        multipart:true,
        formidable:{
            maxFileSize:200 * 1024 * 1024
        }
    }))
    .use(KoaStatic(path.join(__dirname, '..','static')))
    .use(AccessLogMiddleware)
    .use(router.routes())

const run = (port:any):Server => {
    return app.listen(8888)
}
export default run