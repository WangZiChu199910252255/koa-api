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
    return app.listen(port)
}
export default run