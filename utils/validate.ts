import Schema, {Rules, Values} from 'async-validator';
import { Context } from 'koa';
/**
 *数据校验
 *
 * @template T  校验数据类型
 * @param {Context} ctx  上下文
 * @param {Rules} rules  校验规则
 * @return {*}  {(Promise<{data: T , error:any|null}>)}
 */
async function validate<T extends Values>(ctx: Context,rules:Rules):Promise<{data: T , error:any|null}> {
    const validator = new Schema(rules)
    let data : any
    switch (ctx.method){
        case "GET":
            data = getFromData(ctx)
            break
        case "POST":
            data = getFromData(ctx)
            break
        case "PUT":
            data = getFromData(ctx)
            break
        case "DELETE":
            break
    }
    return validator.validate(data).then(()=>{
        return {
            data: data as T,
            error: null
        }
    }).catch(err=>{
        return{
            data:{} as T,
            error:err.errors[0].message
        }
    })
    
}
function getFromData(ctx:Context){
    return ctx.request.body
}
export default validate